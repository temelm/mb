import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import App from './components/App'
import './styles/index.scss'

library.add(faBars, faLinkedinIn)

ReactDOM.render(<App />, document.getElementById('root'))
