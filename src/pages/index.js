import Head from 'next/head'
import Layout from '../components/Layouts/Layout'
import HomeComponent from '../components/Landing/Home'
import About from '../components/Landing/AboutUs'
import Navbar from '../components/Navbar'
import Service from '../components/Landing/OurService'
import Project from '../components/Landing/OurProject'
import Partner from '../components/Landing/OurPartner'
import Blog from '../components/Landing/Blog'

export default function Home() {
  return (
    <div>
      <Layout>
        <HomeComponent />
        <About />
        <Service />
        <Project />
        <Partner />
        <Blog />
      </Layout>
    </div>
  )
}
