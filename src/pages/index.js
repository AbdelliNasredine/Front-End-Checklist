import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/Image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>

    <Link to="/checklist/">Go to page 2</Link>
  </Layout>
)

export default IndexPage