import React from 'react'
import Nav from './Nav'
import Welcome from './Welcome'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Notification from './Notification'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hamburgerToggle: false,
      contactFormSubmitDisabled: false,
      displayNotification: false,
      notificationType: '',
      notificationMessage: ''
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

  setNotification (display, type, message) {
    this.setState({
      displayNotification: (typeof display === 'boolean') ? display : false,
      notificationType: type,
      notificationMessage: message
    })
  }

  handleHamburgerToggle (event) {
    event.preventDefault()
    this.setHamburgerToggle()
  }

  handleContactFormSubmit (event) {
    event.preventDefault()
    this.setState({
      contactFormSubmitDisabled: true
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
          contactFormSubmitDisabled: false
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
    const {
      hamburgerToggle, contactFormSubmitDisabled, displayNotification, notificationType, notificationMessage
    } = this.state
    return (
      <div id='app'>
        <Nav
          hamburgerToggle={hamburgerToggle}
          setHamburgerToggle={this.setHamburgerToggle}
          handleHamburgerToggle={this.handleHamburgerToggle}
        />
        <Welcome />
        <About />
        <Services />
        <Contact
          contactFormSubmitDisabled={contactFormSubmitDisabled}
          handleContactFormSubmit={this.handleContactFormSubmit}
        />
        {displayNotification && (
          <Notification
            type={notificationType}
            message={notificationMessage}
            handleNotificationDismiss={this.handleNotificationDismiss}
          />
        )}
      </div>
    )
  }
}

export default App
