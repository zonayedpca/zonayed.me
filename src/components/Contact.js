import React from "react"

const Contact = () => {
  return (
    <div className="contact-area">
      <div className="title right">
        <p>My Skills</p>
      </div>
      <div className="contact">
        <div className="contact-details">
          <ul>
            <li>
              <h5>Email</h5>
              <p>email@email.com</p>
            </li>
            <li>
              <h5>Skype</h5>
              <p>zonayedpca</p>
            </li>
            <li>
              <h5>Phone</h5>
              <p>+91-7347075818</p>
            </li>
            <li>
              <h5>Address</h5>
              <p>Cumilla, Bangladesh</p>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <form>
            <input name="name" placeholder="Your name" />
            <input name="email" placeholder="Your email" />
            <textarea name="message" placeholder="Your message"></textarea>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export { Contact }
