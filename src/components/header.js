import React from 'react'

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
        <a href="https://js.xigmi.com">IX JS</a>
      </li>
      <li>
        <a href="https://variablequality.xigmi.com">Variable Q</a>
      </li>
      <li>
        <a href="https://s3.xigmi.com">S3 Bucket</a>
      </li>
      <li>
        <a href="https://gatsbyimagetest.netlify.com/">Gatsby image</a>
      </li>
      <li>
        <a href="https://gatsbyimagetest.netlify.com/page-2">IX React</a>
      </li>
      <li>
        <a href="https://vue.xigmi.com">Vue.js</a>
      </li>
    </ul>
  </nav>
)

export default Header
