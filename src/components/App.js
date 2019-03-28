import React from 'react'
import Nav from './Nav'
import Welcome from './Welcome'
import About from './About'
import Contact from './Contact'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hamburgerToggle: false
    }
    this.setHamburgerToggle = this.setHamburgerToggle.bind(this)
    this.handleHamburgerToggle = this.handleHamburgerToggle.bind(this)
  }

  setHamburgerToggle (toggle) {
    this.setState(prevState => ({
      hamburgerToggle: (typeof toggle === 'boolean') ? toggle : !prevState.hamburgerToggle
    }))
  }

  handleHamburgerToggle (event) {
    event.preventDefault()
    this.setHamburgerToggle()
  }

  render () {
    const { hamburgerToggle } = this.state
    return (
      <div id='app'>
        <Nav
          hamburgerToggle={hamburgerToggle}
          setHamburgerToggle={this.setHamburgerToggle}
          handleHamburgerToggle={this.handleHamburgerToggle}
        />
        <Welcome />
        <About />
        <Contact />
      </div>
    )
  }
}

export default App
