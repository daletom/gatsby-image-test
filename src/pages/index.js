import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const IndexPage = props => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <Img fluid={props.data.image1.childImageSharp.fluid} />
    <Img fluid={props.data.image2.childImageSharp.fluid} />
    <Img fluid={props.data.image3.childImageSharp.fluid} />
    <Img fluid={props.data.image4.childImageSharp.fluid} />
    <Img fluid={props.data.image5.childImageSharp.fluid} />
    <Img fluid={props.data.image6.childImageSharp.fluid} />
    <Img fluid={props.data.image7.childImageSharp.fluid} />
    <Img fluid={props.data.image8.childImageSharp.fluid} />
    <Img fluid={props.data.image9.childImageSharp.fluid} />
    <Img fluid={props.data.image10.childImageSharp.fluid} />
    <Img fluid={props.data.image11.childImageSharp.fluid} />
    <Img fluid={props.data.image12.childImageSharp.fluid} />
    <Img fluid={props.data.image13.childImageSharp.fluid} />
    <Img fluid={props.data.image14.childImageSharp.fluid} />
    <Img fluid={props.data.image15.childImageSharp.fluid} />
    <Img fluid={props.data.image16.childImageSharp.fluid} />
    <Img fluid={props.data.image17.childImageSharp.fluid} />
    <Img fluid={props.data.image18.childImageSharp.fluid} />
    <Img fluid={props.data.image19.childImageSharp.fluid} />
    <Img fluid={props.data.image20.childImageSharp.fluid} />
    <Img fluid={props.data.image21.childImageSharp.fluid} />
    <Img fluid={props.data.image22.childImageSharp.fluid} />
    <Img fluid={props.data.image23.childImageSharp.fluid} />
    <Img fluid={props.data.image24.childImageSharp.fluid} />
    <Img fluid={props.data.image25.childImageSharp.fluid} />
  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 700, quality: 50) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "1.jpg" }) {
      ...fluidImage
    }
    image2: file(relativePath: { eq: "two.jpg" }) {
      ...fluidImage
    }
    image3: file(relativePath: { eq: "3.jpg" }) {
      ...fluidImage
    }
    image4: file(relativePath: { eq: "4.jpg" }) {
      ...fluidImage
    }
    image5: file(relativePath: { eq: "5.jpg" }) {
      ...fluidImage
    }
    image6: file(relativePath: { eq: "6.jpg" }) {
      ...fluidImage
    }
    image7: file(relativePath: { eq: "7.jpg" }) {
      ...fluidImage
    }
    image8: file(relativePath: { eq: "8.jpg" }) {
      ...fluidImage
    }
    image9: file(relativePath: { eq: "9.jpg" }) {
      ...fluidImage
    }
    image10: file(relativePath: { eq: "10.jpg" }) {
      ...fluidImage
    }
    image11: file(relativePath: { eq: "11.jpg" }) {
      ...fluidImage
    }
    image12: file(relativePath: { eq: "12.jpg" }) {
      ...fluidImage
    }
    image13: file(relativePath: { eq: "13.jpg" }) {
      ...fluidImage
    }
    image14: file(relativePath: { eq: "14.jpg" }) {
      ...fluidImage
    }
    image15: file(relativePath: { eq: "15.jpg" }) {
      ...fluidImage
    }
    image16: file(relativePath: { eq: "16.jpg" }) {
      ...fluidImage
    }
    image17: file(relativePath: { eq: "17.jpg" }) {
      ...fluidImage
    }
    image18: file(relativePath: { eq: "18.jpg" }) {
      ...fluidImage
    }
    image19: file(relativePath: { eq: "19.jpg" }) {
      ...fluidImage
    }
    image20: file(relativePath: { eq: "20.jpg" }) {
      ...fluidImage
    }
    image21: file(relativePath: { eq: "21.jpg" }) {
      ...fluidImage
    }
    image22: file(relativePath: { eq: "22.jpg" }) {
      ...fluidImage
    }
    image23: file(relativePath: { eq: "23.jpg" }) {
      ...fluidImage
    }
    image24: file(relativePath: { eq: "24.jpg" }) {
      ...fluidImage
    }
    image25: file(relativePath: { eq: "25.jpg" }) {
      ...fluidImage
    }
  }
`
