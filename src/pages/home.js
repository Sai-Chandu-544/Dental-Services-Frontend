import {Link} from "react-router-dom"

import '../styles/home.css';

export const Home=()=>{
  return (
    <>
      <div className="home">
  <div className="hero">
    <img
      src="https://img.freepik.com/free-photo/smiling-doctor-dental-office_23-2151983462.jpg"
      className="hero-bg"
    />

    <div className="hero-content">
      <h1>Your Smile, Our Passion</h1>
      <p>Welcome to BrightSmile Dental Clinic &ndash; where we care for your teeth like family.</p>
      <Link to="contact" className="btn-primary">Book Appointment</Link>
    </div>
  </div>
</div>


</>
 
  );
}

