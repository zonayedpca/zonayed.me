import React from "react"

const Footer = () => {
  return (
    <footer className="footer-area">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export { Footer }
