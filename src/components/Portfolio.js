import React, { useState } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

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
    <div id="portfolio" className="portfolio-area">
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
            {selectedFeaturedPortfolios.map((portfolio, index) => (
              <div key={index} className="portfolio">
                <div className="portfolio-img">
                  <img alt={portfolio.name} src={portfolio.image} />
                </div>
                <div className="details">
                  <h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={portfolio.demo}
                    >
                      {portfolio.name}
                    </a>
                  </h4>
                  <p>{portfolio.description}</p>
                  <div className="links">
                    <ul>
                      {portfolio.source && (
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={portfolio.source}
                          >
                            <FaGithub />
                          </a>
                        </li>
                      )}
                      {portfolio.demo && (
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={portfolio.demo}
                          >
                            <FaExternalLinkAlt />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <ul className="portfolio-tools">
                    {portfolio.tools.map(tool => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="portfolio-items portfolios-regular">
            {selectedPortfolios.map((portfolio, index) => (
              <div key={index} className="portfolio small">
                <div className="details">
                  <h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={portfolio.demo}
                    >
                      {portfolio.name}
                    </a>
                  </h4>
                  <p>{portfolio.description}</p>
                  <div className="links">
                    <ul>
                      {portfolio.source && (
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={portfolio.source}
                          >
                            <FaGithub />
                          </a>
                        </li>
                      )}
                      {portfolio.demo && (
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={portfolio.demo}
                          >
                            <FaExternalLinkAlt />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <ul className="portfolio-tools">
                    {portfolio.tools.map(tool => (
                      <li key={tool}>{tool}</li>
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
