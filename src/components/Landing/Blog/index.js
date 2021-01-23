import React from 'react'
import style from './Blog.module.css'
import serviceStyle from '../../UI/UI.module.css'
import BlogPage from './Blog'

const Blog = () => {
  return (
    <div className={style.blog}>
      <div className={[style.blog_header_center]}>
        <div className={serviceStyle.sectionHeaderLine}></div>
        <h3>BLOGS</h3>
      </div>
      <BlogPage />
    </div>
  )
}

export default Blog
