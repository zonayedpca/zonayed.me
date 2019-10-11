import React from "react"

import {
  Intro,
  LoveToDo,
  Portfolio,
  About,
  Skill,
  Contact,
} from "../components"
import { Layout, SEO } from "../components/common"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Zonayed Ahmed" />
      <Intro />
      <About />
      <Skill />
      <LoveToDo />
      <Portfolio />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
