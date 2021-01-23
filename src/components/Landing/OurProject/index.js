import React from 'react'
import Button from '../../UI/Button'
import serviceStyle from '../../UI/UI.module.css'
import style from './Project.module.css'
import Projects from './Projects'


const Project = () => {
  return (
    <div className={style.project}>
      <div className={[style.project_header_center]}>
        <div className={serviceStyle.sectionHeaderLine}></div>
        <h3>OUR PROJECTS</h3>
      </div>
      <Projects />
      <div className={style.project_btn}>
        <Button label="VIEW ALL PROJECTS" background="#4CB952" />
      </div>
    </div>
  )
}

export default Project
