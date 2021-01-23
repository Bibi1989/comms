import React from 'react'
import Head from 'next/head'
import Navbar from '../Navbar'
import style from './Layout.module.css'
import Footer from '../Landing/Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Commsworth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={style.layout}>
        {children}
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  )
}

export default Layout
