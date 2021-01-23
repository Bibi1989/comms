import React from 'react'
import style from './Home.module.css'

const HomeComponent = () => {
  return (
    <div className={style.home}>
      <div className={style.left}>
        <h1>We are in <br /> the business <br /> of sustainability</h1>
        <p>TCSRN founded in 2006,  is a consulting company that helps organisations to contribute to their societal goals of a philanthropic, activist, or charitable nature by engaging in or supporting volunteering or ethically-oriented practices.</p>
        <p id='explore'>EXPLORE SITE <span>&#8595;</span></p>
      </div>
      <div className={style.right}></div>
      <div className={style.overlay}></div>
    </div>
  )
}

export default HomeComponent
