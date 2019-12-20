import React from 'react'
import Layout from '../components/layout'

const Header = ({ siteTitle }) => (
  <nav class="mobile-menu">
    <label for="show-menu" class="show-menu">
      <span>Menu</span>
      <div class="lines"></div>
    </label>
    <input type="checkbox" id="show-menu"></input>
    <ul id="menu">
      <li>
        <a href="https://www.xigmi.com">Home</a>
      </li>
      <li>
        <a href="https://variablequality.xigmi.com">Variable Q</a>
      </li>
      <li>
        <a href="https://s3.xigmi.com">S3 Bucket</a>
      </li>
      <li>
        <a href="https://gatsbyimagetest.netlify.com/"> Gatsby image</a>
      </li>
      <li>
        <a href="https://gatsbyimagetest.netlify.com/page-2"> ix React</a>
      </li>
    </ul>
  </nav>
)

export default Header
