import {useState} from 'react';
import Calendar from 'react-calendar';
import './Calender.css';
import Time from './Time';
import { Link } from 'react-router-dom';

function App() {
 
const [date, setDate] = useState(new Date());
const [showTime, setShowTime] = useState(false) 

 return (
  <div className='Calender'>
    <div className="lash-text">
      <h2>
          Lash.ng Lxxii Lash
          <br />
          <span className="with">Microblading with Victy Senior Artist (Brows)</span>
          <br />
          <span> <Link to="/" className="change" >change</Link> </span>
      </h2>
    </div>
    <h1 className='header'>CHOOSE A DATE & TIME</h1>
    <div className="flex">
      <div>
        <div>
          <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
        </div>

        {date.length > 0 ? (
        <p>
          <span>Start:</span>
          {date[0].toDateString()}
          &nbsp;
          &nbsp;
          <span>End:</span>{date[1].toDateString()}
        </p>
                ) : (
        <p>
            {/* <span>Default selected date:</span>{date.toDateString()} */}
        </p> 
                )
        }
      </div>
      <div className="time-stlye">
        <Time showTime={showTime} date={date}/>
      </div>
    </div>

  </div>
  )
}

export default App;