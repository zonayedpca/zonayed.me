import React from "react"

const Portfolio = () => {
  return (
    <div className="portfolio-area">
      <div className="title left">
        <p>My Skills</p>
      </div>
      <div className="portfolios">
        <ul className="portfolio-nav">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
        <div className="portfolio">
          <div>Image</div>
          <h4>Title</h4>
          <p>Little bit description</p>
          <ul className="portfolio-action">
            <li>
              <a href="#">Link1</a>
            </li>
            <li>
              <a href="#">Link1</a>
            </li>
            <li>
              <a href="#">Link1</a>
            </li>
          </ul>
        </div>
        <div className="portfolio">
          <div>Image</div>
          <h4>Title</h4>
          <p>Little bit description</p>
          <ul className="portfolio-action">
            <li>
              <a href="#">Link1</a>
            </li>
            <li>
              <a href="#">Link1</a>
            </li>
            <li>
              <a href="#">Link1</a>
            </li>
          </ul>
        </div>
        <div className="portfolio">
          <div>Image</div>
          <h4>Title</h4>
          <p>Little bit description</p>
          <ul className="portfolio-action">
            <li>
              <a href="#">Link1</a>
            </li>
            <li>
              <a href="#">Link1</a>
            </li>
            <li>
              <a href="#">Link1</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export { Portfolio }
