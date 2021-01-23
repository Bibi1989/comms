import React from 'react'
import Button from '../UI/Button'
import style from './Navbar.module.css'
// import Svg from '../../assets/images/logo.svg'

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <img src={'./logo.svg'} alt="nav logo" width={100} />
      </div>
      <div className={style.right}>
        <ul className={style.list}>
          <li>Services</li>
          <li>About Us</li>
          <li>CSR Academy</li>
          <li>Publications</li>
          <li>Events</li>
          <li>Media</li>
        </ul>
        <Button label="Contact Us" background="#4CB952" />
      </div>
    </nav>
  )
}



export default Navbar
