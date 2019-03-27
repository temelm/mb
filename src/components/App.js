import React from 'react'
import Welcome from './Welcome'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div id='app'>
        <Welcome />
      </div>
    )
  }
}

export default App
