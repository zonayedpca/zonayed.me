import React, { useState } from "react"

import "./portfolioaction.css"
import { Button } from "./common"

const PortfolioAction = () => {
  let showMoreTimeOut
  let moreTimeOut
  const [title, setTitle] = useState("More")
  const handleMouseOver = () => {
    clearTimeout(moreTimeOut)
    showMoreTimeOut = setTimeout(() => {
      setTitle("Show More")
    }, 1000)
  }
  const handleOnMouseOut = () => {
    clearTimeout(showMoreTimeOut)
    moreTimeOut = setTimeout(() => {
      setTitle("More")
    }, 2000)
  }
  const handleClick = e => {
    e.preventDefault()
    console.log("click")
    clearTimeout()
    setTitle("Showing More...")
    setTimeout(() => {}, 1000)
  }
  return (
    <div className="portfolio-action">
      <Button
        onMouseOver={handleMouseOver}
        onMouseOut={handleOnMouseOut}
        onClick={handleClick}
        title={title}
        mt="15px"
      />
    </div>
  )
}

export default PortfolioAction
