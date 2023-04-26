import React from 'react'
import "./Service4.css"
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Link } from 'react-router-dom';

const longText_Service4 = 
    "Refill Lash Extension after 2/3 weeks. 70% Payment validates bookings Globus Bank 2001228885 Raqibat Adeshewa. Please ensure to send a screen shot of payment and booking slip to ensure proper validation. Failure to do so means termination of bookings.";
const longSecText_Service4 = 
    "Refill Lash Extension after 2/3 weeks. 70% Payment validates bookings Globus Bank 2001228885 Raqibat Adeshewa. Please ensure to send a screen shot of payment and booking slip to ensure proper validation. Failure to do so means termination of bookings.";
const longThiText_Service4 = 
    "Refill Lash Extension after 2/3 weeks. 70% Payment validates bookings Globus Bank 2001228885 Raqibat Adeshewa. Please ensure to send a screen shot of payment and booking slip to ensure proper validation. Failure to do so means termination of bookings.";
const longFouText_Service4 = 
    "Refill Lash Extension after 2/3 weeks. 70% Payment validates bookings Globus Bank 2001228885 Raqibat Adeshewa. Please ensure to send a screen shot of payment and booking slip to ensure proper validation. Failure to do so means termination of bookings.";

const Service4 = () => {
  return (
    <div className="Service4">
        <h3>Semi Permanent Lash Refill (Till I Know)</h3>
        <div>
          <Link to="/calender" ><h4>Classic RF - ₦5,000</h4></Link>
          <ReactReadMoreReadLess
            charLimit={150}
            readMoreText={"(more ▼)"}
            readLessText={"(less ▲)"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longText_Service4}
          </ReactReadMoreReadLess>
        </div>
        <div>
          <Link to="/calender" ><h4>Hybrid RF - ₦7,000</h4></Link>
          <ReactReadMoreReadLess
            charLimit={150}
            readMoreText={"(more ▼)"}
            readLessText={"(less ▲)"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longSecText_Service4}
          </ReactReadMoreReadLess>
        </div>
        <div>
          <Link to="/calender" ><h4>Volume RF - ₦10,000</h4></Link>
          <ReactReadMoreReadLess
            charLimit={150}
            readMoreText={"(more ▼)"}
            readLessText={"(less ▲)"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longThiText_Service4}
          </ReactReadMoreReadLess>
        </div>
        <div>
          <Link to="/calender" ><h4>Mega Volume RF - ₦15,000</h4></Link>
          <ReactReadMoreReadLess
            charLimit={150}
            readMoreText={"(more ▼)"}
            readLessText={"(less ▲)"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longFouText_Service4}
          </ReactReadMoreReadLess>
        </div>
    </div>
  )
}

export default Service4