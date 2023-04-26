import "./FormText.css"
import { Link } from 'react-router-dom'

const FormText = () => {
  return (
    <div className="FormText">
      <div className="lash-text">
        <h2>
            Lash.ng Lxxii Lash
            <br />
            <span className="with">Microblading with Victy Senior Artist (Brows)</span>
            <br />
            <span> <Link to="/" className="change" >change</Link> </span>
        </h2>
      </div>
      <h1 className='header'>YOUR DETAILS</h1>
      <form action="">
        <div className="nv-row">
          <label htmlFor="business_client_first_name">First Name</label>
          <input type="text" name="fname" autoComplete="given-name" id="business_client_first_name" />
        </div>
        <div className="nv-row">
          <label htmlFor="business_client_last_name">Last Name</label>
          <input type="text" name="lname" autoComplete="family-name" id="business_client_last_name" />
        </div>
        <div className="nv-row">
          <label htmlFor="business_client_email">Email</label>
          <input type="email" name="email" autoComplete="email" id="business_client_email" />
        </div>
        <div className="nv-row">
          <label htmlFor="business_client_phone">Phone</label>
          <input type="tel" name="phone" autoComplete="tel" id="business_client_phone" />
        </div>
        <div className="FormText-notice" id="cancellation-policy">
          <h4>Cancellation policy</h4>
          <p>
          You can cancel online up to 24 hours prior to the appointment.
          If payment has been <br />
          done previously, please note 65% payment will be paid into your account or you <br />
          reschedule for a convenient later date. No refund if notice is less than 24hrs. <br />
          </p>
        </div>
        <div class="form-row">
          <input type="checkbox" name="remember_me" id="remember_me" value="true" /> Remember me at this computer
        </div>
        <button className="btn">Schedule Appointment</button>
      </form>
    </div>
  )
}

export default FormText