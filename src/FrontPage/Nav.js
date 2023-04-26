import React from 'react'
import "./Nav.css"
import Lashlogo from "../image/LXXILASHES.png"

const Nav = () => {
  return (
    <div className="Nav">
        <img className="Nav-img" src={Lashlogo} alt="" />
        <div className="Header">
          <h2 className="Lash-Name">Lxxii.Lash</h2>
          <p>
            Hello Darling❤️
            <br />
            > Site opens for bookings Saturday 6PM
            <br />
            > Strictly Bookings / Appointment
            <br />
            > Work / Call Hours (Mon-Fri) (10:00am - 6pm)
            <br />
            > No Home Service 
            <br />
            > After booking, kindly ensure you make payments immediately. Thank you for patronage.
            <br />
            Globus Bank 2001228885 Raqibat Adeshewa
          </p>
          <div className="Navbar">
            <h2>CHOOSE A SERVICE TO SCHEDULE</h2>
          </div>
        </div>
    </div>
  )
}

export default Nav