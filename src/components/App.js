import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../images/logo.png'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hamburgerToggle: false
      // contactFormSubmitDisabled: false,
      // displayNotification: false,
      // notificationType: '',
      // notificationMessage: ''
    }
    this.setHamburgerToggle = this.setHamburgerToggle.bind(this)
    this.setNotification = this.setNotification.bind(this)
    this.handleHamburgerToggle = this.handleHamburgerToggle.bind(this)
    this.handleContactFormSubmit = this.handleContactFormSubmit.bind(this)
    this.handleNotificationDismiss = this.handleNotificationDismiss.bind(this)
  }

  setHamburgerToggle (toggle) {
    this.setState(prevState => ({
      hamburgerToggle: (typeof toggle === 'boolean') ? toggle : !prevState.hamburgerToggle
    }))
  }

  // setNotification (display, type, message) {
  setNotification () {
    this.setState({
      // displayNotification: (typeof display === 'boolean') ? display : false,
      // notificationType: type,
      // notificationMessage: message
    })
  }

  handleHamburgerToggle (event) {
    event.preventDefault()
    this.setHamburgerToggle()
  }

  handleContactFormSubmit (event) {
    event.preventDefault()
    this.setState({
      // contactFormSubmitDisabled: true
    })
    const contactForm = event.target
    const action = contactForm.getAttribute('action')
    fetch(action, {
      method: 'post',
      body: new FormData(contactForm)
    }).then(response => response.text()).then((text) => {
      if (text === 'success') {
        contactForm.reset()
        this.setNotification(true, 'success', 'Sent.')
      } else {
        this.setNotification(true, 'error', 'Your message was not sent. Please try again.')
      }
      setTimeout(() => {
        this.setState({
          // contactFormSubmitDisabled: false
        })
      }, 1000)
      window.notificationTimeout = setTimeout(() => {
        this.setNotification(false, '', '')
      }, 10000)
    }).catch((error) => {
      console.error(error) // eslint-disable-line no-console
    })
  }

  handleNotificationDismiss (event) {
    event.preventDefault()
    this.setNotification(false, '', '')
    window.clearTimeout(window.notificationTimeout)
  }

  render () {
    return (
      <div id='app' className='centered'>
        <img src={logo} alt='MB Accounting &amp; Consulting Ltd' id='logo' />
        <h2>Coming Soon</h2>
        <a className='linkedin' href='//www.linkedin.com/in/mete-bagzibagli-57017627' target='blank' rel='noopener'>
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} fixedWidth size='lg' />
        </a>
      </div>
    )
  }
}

export default App
