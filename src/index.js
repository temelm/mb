// import React from 'react'
// import ReactDOM from 'react-dom'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
// import App from './components/App'
// import './styles/index.scss'

// library.add(faBars, faLinkedinIn)

// ReactDOM.render(<App />, document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'
import ReactFullpage from '@fullpage/react-fullpage'
import Welcome from './components/Welcome'
import About from './components/About'
import './styles/index.scss'

const FullScreenPage = () => {
  const options = {
    anchors: [],
    autoScrolling: true,
    licenseKey: 'YOUR_KEY_HERE',
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About', 'third'],
    scrollingSpeed: 1000,
    showActiveTooltip: true
  }
  return (
    <ReactFullpage
      {...options}

      render={() => (
        <ReactFullpage.Wrapper>
          <Welcome />
          <About />
          <div className='section'>
            <h1>Section 3</h1>
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  )
}

ReactDOM.render(<FullScreenPage />, document.getElementById('root'))
