import React, { useState } from "react"

import { Container } from "./common"

import { portfolios } from "../data"

import "./portfolio.css"

const Portfolio = () => {
  const portfoliosName = Object.keys(portfolios)
  const [selectedPortfolio, setSelectedPortfolio] = useState(portfoliosName[0])
  const selectedFeaturedPortfolios = portfolios[selectedPortfolio].filter(
    portfolio => portfolio.type === "featured"
  )
  const selectedPortfolios = portfolios[selectedPortfolio].filter(
    portfolio => portfolio.type === "regular"
  )
  return (
    <div className="portfolio-area">
      <Container>
        <div className="title left" style={{ height: "160px" }}>
          <p>Portfolio</p>
        </div>
        <div className="portfolios">
          <ul className="portfolio-nav">
            {portfoliosName.map(name => (
              <li
                onClick={() => setSelectedPortfolio(name)}
                className={name === selectedPortfolio ? "active" : ""}
                key={name}
              >
                {name}
              </li>
            ))}
          </ul>
          <div className="portfolio-items portfolios-featured">
            {selectedFeaturedPortfolios.map(portfolio => (
              <div key={portfolio.name} className="portfolio">
                <div className="portfolio-img">
                  <img alt={portfolio.name} src={portfolio.image} />
                </div>
                <div className="details">
                  <h4>
                    <a href={portfolio.demo}>{portfolio.name}</a>
                  </h4>
                  <p>{portfolio.description}</p>
                  <ul className="portfolio-tools">
                    {portfolio.tools.map(tool => (
                      <li key={tool}>
                        <a href="#">{tool}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="portfolio-items portfolios-regular">
            {selectedPortfolios.map(portfolio => (
              <div key={portfolio.name} className="portfolio">
                <div className="details">
                  <h4>
                    <a href={portfolio.demo}>{portfolio.name}</a>
                  </h4>
                  <p>{portfolio.description}</p>
                  <ul className="portfolio-tools">
                    {portfolio.tools.map(tool => (
                      <li key={tool}>
                        <a href="#">{tool}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Portfolio }
