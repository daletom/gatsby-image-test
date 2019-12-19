import React from 'react'
import { Link } from 'gatsby'
import Imgix from 'react-imgix'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2, using imgix React</p>
    <Link to="/">Go back to the homepage</Link>
    <div class="imgix-wrapper">
      <Imgix
        src="https://tom.imgix.net/one.jpg"
        sizes="(max-width: 800px) 100vw, 800px"
      />
    </div>
    <div class="imgix-wrapper">
      <Imgix
        src="https://tom.imgix.net/two.jpg"
        sizes="(max-width: 800px) 100vw, 800px"
      />
    </div>
    <div class="imgix-wrapper">
      <Imgix
        src="https://tom.imgix.net/three.jpg"
        sizes="(max-width: 800px) 100vw, 800px"
      />
    </div>
  </Layout>
)

export default SecondPage
