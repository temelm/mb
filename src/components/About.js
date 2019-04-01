import React from 'react'

// @todo: Review
const paragraph1 = [
  'Mete is an ACA qualified accountant who had been contracting since 2018. He has graduated from BSc Accounting &',
  'Finance from University of Bath in 2011, and have worked in EY and Moore Stephens, before moving to contracting. As',
  'part of a team, he has provided auditing services to listed companies (IFRS), US subsidiary companies (US GAAP',
  'including SOX 404), and non-listed UK Companies under FRS101 and FRS102 (uncluding FRS102 1A). He also has',
  'experience in accounts preparation for smaller companies under FRS 102, FRS 102 1A and FRS 105; with corporation',
  'tax services. He has worked with private limited companies, academies and public bodies including the National',
  'Audit Office.'
].join(' ')
// @todo: Review
const paragraph2 = [
  'As Mete does contracting himself, he has gained experience in personal tax as well as online accounting tools.',
  'Using his experience with all sizes of firms to date, he aims to bring quality accounting, personal tax and',
  'business advice at affordable rates, using the latest available technology; focusing on contractors and small to',
  'medium sized entities.'
].join(' ')

const About = () => (
  <section id='about'>
    <div className='wrapper'>
      <h1>About</h1>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
    </div>
  </section>
)

export default About
