import React from 'react'
import AboutUsHeader from './AboutUsHeader'
import style from './About.module.css'
import OurStory from './OurStory'
import SectionHeader from '../../UI/SectionHeader'

const About = () => {
  return (
    <div className={style.aboutUs}>
      <SectionHeader title="ABOUT US">
        <p>
          TCSRN founded in 2006, is a consulting company that helps organisations
          to contribute to their societal goals of a philanthropic, activist, or
          charitable nature by engaging in or supporting volunteering or
          ethically-oriented practices.
        </p>
      </SectionHeader>
      <OurStory />
    </div>
  )
}

export default About
