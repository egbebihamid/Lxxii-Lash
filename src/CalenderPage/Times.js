import React from 'react'
import {useState} from 'react';
import "./Times.css"
import { Link } from 'react-router-dom';


const time1 = ['10:00 am']
const time2 = ['12:00 pm']
const time3 = ['2:00 pm']
const time4 = ['4:00 pm']

function Times(props) {

 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)

 function displayInfo(e) {
   setInfo(true);
   setEvent(e.target.innerText);
}

return (
 
 <div className="Times">
   {time1.map(times => {
    return (
    <div>
      <Link to="/form" ><button className="button" onClick={(e)=> displayInfo(e)}> {times} </button></Link>
    </div>
        )
     })}
    <div>
      {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
    </div>

     {/* Time2 Array */}
    {time2.map(times => {
    return (
    <div>
      <Link to="/form" ><button className="button" onClick={(e)=> displayInfo(e)}> {times} </button></Link>
    </div>
        )
     })}
    <div>
      {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
    </div>
     
    {/* Time3 Array */}
    {time3.map(times => {
    return (
    <div>
      <Link to="/form" ><button className="button" onClick={(e)=> displayInfo(e)}> {times} </button></Link>
    </div>
        )
     })}
    <div>
      {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
    </div>

    {/* Time4 Array */}
    {time4.map(times => {
    return (
    <div>
      <Link to="/form" ><button className="button" onClick={(e)=> displayInfo(e)}> {times} </button></Link>
    </div>
        )
     })}
    <div>
      {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
    </div>
 </div>
  )
}

export default Times;