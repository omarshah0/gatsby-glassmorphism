import React from "react"
import SEO from "../components/seo"
import Image from "../components/image"
import Fb from "../assets/fb.svg"
import Insta from "../assets/insta.svg"
import Twitter from "../assets/twitter.svg"

const IndexPage = () => (
  <main className="Glassmorphism">
    <SEO title="GlassMorphism" />
    <header>
      <h1>
        <small>BRUNO</small>
      </h1>
      <nav>
        <ul>
          <li>Achievements</li>
          <li>Diet Plan</li>
          <li>News</li>
          <li>Support</li>
        </ul>
      </nav>
      <div className="cta">
        <div className="btn-row">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="btn-row">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="btn-row">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
    <div className="container">
      <div className="information">
        <h1>Bruno - The Pug</h1>
      </div>
      <div className="image">
        <Image />
      </div>
    </div>
    <footer>
      <div className="fb">
        <a href="https://www.facebook.com/omarshah0" target="blank">
          <img src={Fb} alt="Follow on Facebook" />
        </a>
      </div>
      <div className="twitter">
        <a href="https://www.twitter.com/omafarooqshah" target="blank">
          <img src={Twitter} alt="Follow on Twitter" />
        </a>
      </div>
      <div className="insta">
        <a href="https://www.instagram.com/omarfarooqshah" target="blank">
          <img src={Insta} alt="Follow on Instagram" />
        </a>
      </div>
    </footer>
  </main>
)

export default IndexPage
