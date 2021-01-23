import React from "react";
import style from "./Blog.module.css";

const BlogPage = () => {
  return (
    <div className={style.main_blog}>
      <div className={style.blog_grid}>
        <div className={style.blog_image}>
          <img src='../../../../images/blog/blog1.svg' alt='blog one' />
        </div>
        <div className={style.blog_content}>
          <span>JANUARY 2021</span>
          <h3>2020 at a glance: yearly <br /> review</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            egestas adipiscing.
          </p>
          <a href>READ MORE</a>
        </div>
      </div>
      <div className={style.blog_grid}>
        <div className={style.blog_image}>
          <img src='../../../../images/blog/blog2.svg' alt='blog one' />
        </div>
        <div className={style.blog_content}>
          <span>DECEMBER 2020</span>
          <h3>Q3 at a glance: quarterly <br /> review</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            egestas adipiscing.
          </p>
          <a href>READ MORE</a>
        </div>
      </div>
      <div className={style.blog_grid}>
        <div className={style.blog_image}>
          <img src='../../../../images/blog/blog3.svg' alt='blog one' />
        </div>
        <div className={style.blog_content}>
          <span>SEPTEMBER 2020</span>
          <h3>Q4 at a glance: quarterly <br /> review</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            egestas adipiscing.
          </p>
          <a href>READ MORE</a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
