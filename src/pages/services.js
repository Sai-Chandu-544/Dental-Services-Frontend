
import '../styles/services.css';

export const Services=() =>{
  return (
    <div className="services-simple-container">
      

      <h1 className="services-heading">Our Services</h1>
      <p className="services-intro">
        We offer a wide range of dental care services to help you maintain a healthy and beautiful smile.
      </p>

      <div className="services-list">
        <div className="service-item">
          <h3>General Checkup</h3>
          <p>Regular exams and cleanings for healthy teeth and gums.</p>
        </div>
        <div className="service-item">
          <h3>Cosmetic Dentistry</h3>
          <p>Enhance your smile with whitening, veneers, and more.</p>
        </div>
        <div className="service-item">
          <h3>Braces & Aligners</h3>
          <p>Straighten your teeth with traditional or clear aligners.</p>
        </div>
        <div className="service-item">
          <h3>Dental Implants</h3>
          <p>Permanent solutions to replace missing teeth naturally.</p>
        </div>
        <div className="service-item">
          <h3>Root Canal Treatment</h3>
          <p>Remove infection and save your natural teeth.</p>
        </div>
        <div className="service-item">
          <h3>Emergency Dentistry</h3>
          <p>Get immediate care for urgent dental issues.</p>
        </div>
      </div>
    </div>
  );
}


