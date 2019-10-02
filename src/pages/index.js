import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {
  Footer,
  Menu,
  Intro,
  LoveToDo,
  Portfolio,
  About,
  Skill,
  Contact,
} from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Menu />
    <Intro />
    <About />
    <Skill />
    <LoveToDo />
    <Portfolio />
    <Contact />
  </Layout>
)

export default IndexPage
