import React from 'react'
import logo from '../images/logo.png'

const Welcome = () => (
  <section id='welcome'>
    <div className='wrapper'>
      <img src={logo} alt='MB Accounting &amp; Consulting Ltd' />
      <p>
        <q>Accounting simplified.</q>
      </p>
    </div>
  </section>
)

export default Welcome
