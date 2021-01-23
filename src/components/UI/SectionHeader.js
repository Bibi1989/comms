import React from 'react'
import style from './UI.module.css'

const SectionHeader = ({
  title,
  children
}) => {
  return (
    <div className={style.sectionHeader}>
      <div className={style.sectionHeaderAboutUs}>
        <div className={style.sectionHeaderLine}></div>
        <h3>{title}</h3>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default SectionHeader
