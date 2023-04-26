import React from 'react'
import "./Service3.css"
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Link } from 'react-router-dom';

const longText_Service3 = 
    "Simple and sweet for your everyday look. 70% Payment validates bookings Globus Bank 2001228885 Raqibat Adeshewa. Please ensure to send a screen shot of payment and booking slip to ensure proper validation. Failure to do so means termination of bookings.";
const longSecText_Service3 = 
    "Fuller than the classic, also good for your everyday look. 70% Payment validates bookings Globus Bank 2001228885 Raqibat Adeshewa. Please ensure to send a screen shot of payment and booking slip to ensure proper validation. Failure to do so means termination of bookings.";
const longThiText_Service3 = 
    "Full Fluffy eyelash extension.70% Payment validates bookings Globus Bank 2001228885 Raqibat Adeshewa. Please ensure to send a screen shot of payment and booking slip to ensure proper validation. Failure to do so means termination of bookings.";
const longFouText_Service3 = 
    "As the name implies, MEGA! Extremely full and dramatic. 70% Payment validates bookings Globus Bank 2001228885 Raqibat Adeshewa. Please ensure to send a screen shot of payment and booking slip to ensure proper validation. Failure to do so means termination of bookings.";

const Service3 = () => {
  return (
    <div className="Service3">
        <h3>Semi Permanent Lash Extension (Till I Know)</h3>
        <div>
          <Link to="/calender" ><h4>Classic Eyelash Extension - ₦10,000</h4></Link>
          <ReactReadMoreReadLess
            charLimit={150}
            readMoreText={"(more ▼)"}
            readLessText={"(less ▲)"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longText_Service3}
          </ReactReadMoreReadLess>
        </div>
        <div>
          <Link to="/calender" ><h4>Hybrid Eyelash Extension - ₦12,000</h4></Link>
          <ReactReadMoreReadLess
            charLimit={150}
            readMoreText={"(more ▼)"}
            readLessText={"(less ▲)"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longSecText_Service3}
          </ReactReadMoreReadLess>
        </div>
        <div>
          <Link to="/calender" ><h4>Volume Eyelash Extension - ₦15,000</h4></Link>
          <ReactReadMoreReadLess
            charLimit={150}
            readMoreText={"(more ▼)"}
            readLessText={"(less ▲)"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longThiText_Service3}
          </ReactReadMoreReadLess>
        </div>
        <div>
          <Link to="/calender" ><h4>Mega Volume Eyelash Extension - ₦20,000</h4></Link>
          <ReactReadMoreReadLess
            charLimit={150}
            readMoreText={"(more ▼)"}
            readLessText={"(less ▲)"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longFouText_Service3}
          </ReactReadMoreReadLess>
        </div>
    </div>
  )
}

export default Service3