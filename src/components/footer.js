import React from "react"

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer">
        <div className="language">
          <ul>
            <li>
              <p>Thanks</p>
              <div className="progress" />
            </li>
            <li>
              <p>Thanks</p>
              <div className="progress" />
            </li>
            <li>
              <p>Thanks</p>
              <div className="progress" />
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          By <a href="#">Zonayed Ahmed</a>
        </p>
        <ul className="github">
          <li>Star</li>
          <li>Fork</li>
        </ul>
      </div>
    </footer>
  )
}

export { Footer }
