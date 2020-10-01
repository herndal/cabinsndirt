import React from 'react'
import {
  FontAwesomeIcon
} from "@fortawesome/react-fontawesome"
import {
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons"


export default () => (
  <div className="footer">
    <p 
    className="footer-credit">
      Developed by Donald Herndon, thanks to   
      <a href="https://www.appacademy.io/immersive/course?location=new-york-city">
        <FontAwesomeIcon icon={faGraduationCap} /> App Academy
      </a>
    </p>
    <ul className="footer-icons">
      <li>
        <a href="https://github.com/herndal/cabinsndirt">
          <img
            src="https://cabins-seeds.s3.amazonaws.com/github-brands.svg"
            alt="github"
          />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/donald-herndon-8364b01a5/">
          <img
            src="https://cabins-seeds.s3.amazonaws.com/linkedin-in-brands.svg"
            alt="linkedin"
          />
        </a>
      </li>
      <li>
      </li>
    </ul>
  </div>
)