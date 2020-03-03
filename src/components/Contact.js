import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactForm from './ContactForm'

const Contact = (props) => {
  const { contactFormSubmitDisabled, handleContactFormSubmit } = props
  return (
    <section id='contact'>
      <div className='wrapper'>
        <h1>Contact</h1>
        <ContactForm
          contactFormSubmitDisabled={contactFormSubmitDisabled}
          handleContactFormSubmit={handleContactFormSubmit}
        />
        <div className='contact-social'>
          <div className='social-stack'>
            <div className='social social-linkedin'>
              <a href='//www.linkedin.com/in/mete-bagzibagli-57017627' target='blank' rel='noopener'>
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} fixedWidth size='lg' />
              </a>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <span role='img' aria-label='Copyright'>©️&nbsp;</span>
          2020 MB Accounting &amp; Consulting Ltd
        </div>
      </div>
    </section>
  )
}

export default Contact
