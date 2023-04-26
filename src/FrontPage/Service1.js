import React from 'react'
import "./Service1.css"
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Link } from 'react-router-dom';

const longText_Service1 =
  "It fills in sparse eyebrows in a natural-looking way, creating the illusion of more hairs on the brow. Not suitable for oily skin. 70% Payment validates bookings Globus Bank 2001228885 Raqibat Adeshewa. Please ensure to send a screen shot of payment and booking slip to ensure proper validation. Failure to do so means termination of bookings.";
const longSecText_Service1 = 
  "It fills in sparse eyebrows in a natural-looking way, creating the illusion of more hairs on the brow with a little shading to give that natural pop. 70% Payment validates bookings Globus Bank 2001228885 Raqibat Adeshewa. Please ensure to send a screen shot of payment and booking slip to ensure proper validation. Failure to do so means termination of bookings.";
const longThiText_Service1 = 
  "Ombré shading is a semi-permanent eyebrow styling technique that uses a small machine to place extremely thin dots of pigment into the skin, creating a soft-shaded brow pencil look. Ombré shading graces you with one to two years of low maintenance for your brows. 70% Payment validates bookings Globus Bank 2001228885 Raqibat Adeshewa. Please ensure to send a screen shot of payment and booking slip to ensure proper validation. Failure to do so means termination of bookings.";
const longFouText_Service1 = 
  "Combo brows is a combination of two forms of semi-permanent techniques: microblading (strokes) and powder brows (shading).The powder effect is applied to the body of the brow using a semi permanent makeup device to give the brow its fullness. 70% Payment validates bookings Globus Bank 2001228885 Raqibat Adeshewa. Please ensure to send a screen shot of payment and booking slip to ensure proper validation. Failure to do so means termination of bookings.";

const Service1 = () => {
  return (
    <div className="Service1">
        <h3>Senior Artist Brow Services(Till I Know)</h3>
        <div>
          <Link to="/calender" ><h4>Microblading - ₦30,000</h4></Link>
          <ReactReadMoreReadLess
            charLimit={150}
            readMoreText={"(more ▼)"}
            readLessText={"(less ▲)"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longText_Service1}
          </ReactReadMoreReadLess>
        </div>
        <div>
          <Link to="/calender" ><h4>Microshading - ₦40,000</h4></Link>
          <ReactReadMoreReadLess
            charLimit={150}
            readMoreText={"(more ▼)"}
            readLessText={"(less ▲)"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longSecText_Service1}
          </ReactReadMoreReadLess>
        </div>
        <div>
          <Link to="/calender" ><h4>Ombré Brows - ₦35,000</h4></Link>
          <ReactReadMoreReadLess
            charLimit={150}
            readMoreText={"(more ▼)"}
            readLessText={"(less ▲)"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longThiText_Service1}
          </ReactReadMoreReadLess>
        </div>
        <div>
          <Link to="/calender" ><h4>Combo Brows - ₦45,000</h4></Link>
          <ReactReadMoreReadLess
            charLimit={150}
            readMoreText={"(more ▼)"}
            readLessText={"(less ▲)"}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
          >
            {longFouText_Service1}
          </ReactReadMoreReadLess>
        </div>
    </div>
  )
}

export default Service1