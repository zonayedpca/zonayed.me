import React from "react"

import "./button.css"

const Button = ({
  title,
  link,
  color,
  bgColor,
  borderColor,
  mt,
  mb,
  ml,
  mr,
}) => {
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
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  color: "rgba(255, 255, 255, 0.85)",
  bgColor: "transparent",
  borderColor: "#00cf5d",
}

export { Button }
