import React from 'react'
import "./Service2.css"
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Link } from 'react-router-dom';

const longText_Service2 = 
    "Touch Up your Microblading after 6 or 8weeks , depending on skin type. 70% Payment validates bookings Globus Bank 2001228885 Raqibat Adeshewa. Please ensure to send a screen shot of payment and booking slip to ensure proper validation. Failure to do so means termination of bookings.";
const longSecText_Service2 = 
    "Touch up your Microshading after 6 or 8 weeks depending on skin type. 70% Payment validates bookings Globus Bank 2001228885 Raqibat Adeshewa. Please ensure to send a screen shot of payment and booking slip to ensure proper validation. Failure to do so means termination of bookings.";
const longThiText_Service2 = 
    "Touch Up your Ombré after 6 or 8weeks , depending on skin type. 70% Payment validates bookings Globus Bank 2001228885 Raqibat Adeshewa. Please ensure to send a screen shot of payment and booking slip to ensure proper validation. Failure to do so means termination of bookings.";
const longFouText_Service2 = 
    "Touch Up your Combo after 6 or 8weeks , depending on skin type. 70% Payment validates bookings Globus Bank 2001228885 Raqibat Adeshewa. Please ensure to send a screen shot of payment and booking slip to ensure proper validation. Failure to do so means termination of bookings.";

const Service2 = () => {
  return (
    <div className="Service2">
        <h3>Senior Artist Brow Services(Till I Know)</h3>
        <div>
          <Link to="/calender" ><h4>Microblading TP - ₦25,000</h4></Link>
          <ReactReadMoreReadLess
            charLimit={150}
            readMoreText={"(more ▼)"}
            readLessText={"(less ▲)"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longText_Service2}
          </ReactReadMoreReadLess>
        </div>
        <div>
          <Link to="/calender" ><h4>Microshading TP - ₦30,000</h4></Link>
          <ReactReadMoreReadLess
            charLimit={150}
            readMoreText={"(more ▼)"}
            readLessText={"(less ▲)"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longSecText_Service2}
          </ReactReadMoreReadLess>
        </div>
        <div>
          <Link to="/calender" ><h4>Ombré TP - ₦25,000</h4></Link>
          <ReactReadMoreReadLess
            charLimit={150}
            readMoreText={"(more ▼)"}
            readLessText={"(less ▲)"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longThiText_Service2}
          </ReactReadMoreReadLess>
        </div>
        <div>
          <Link to="/calender" ><h4>Combo TP - ₦30,000</h4></Link>
          <ReactReadMoreReadLess
            charLimit={150}
            readMoreText={"(more ▼)"}
            readLessText={"(less ▲)"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longFouText_Service2}
          </ReactReadMoreReadLess>
        </div>
    </div>
  )
}

export default Service2