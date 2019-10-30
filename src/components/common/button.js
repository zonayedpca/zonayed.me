import React from "react"

import "./button.css"

const Button = ({
  title,
  link,
  target,
  clickEvent,
  onMouseOver,
  onMouseOut,
  color,
  bgColor,
  borderColor,
  mt,
  mb,
  ml,
  mr,
}) => {
  const handleClick = e => {
    e.preventDefault()
    const hash = e.target.hash
    const el = document.querySelector(hash)
    const offsetTop = el.offsetTop
    window.scrollTo({
      top: offsetTop,
      left: 0,
      behavior: "smooth",
    })
  }
  return (
    <a
      style={{
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
        color,
        borderColor,
        backgroundColor: bgColor,
      }}
      target={target}
      onClick={clickEvent && handleClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      rel={target ? "noopener noreferrer" : ""}
      className="btn"
      href={link}
    >
      {title}
    </a>
  )
}

Button.defaultProps = {
  title: "Button",
  link: "https://zonayed.me",
  target: "",
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  color: "rgba(255, 255, 255, 0.85)",
  bgColor: "transparent",
  borderColor: "#00cf5d",
}

export { Button }
