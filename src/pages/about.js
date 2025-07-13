
import "../styles/about.css"
export const  AboutUs=() =>{
  return (
    <div  className="about-container">
     
      <section className="section">
        <h2>Our Clinic</h2>
        <p>
          BrightSmile Dental Clinic has been serving the community for over 10 years. Our modern facilities
          and friendly staff ensure a comfortable and welcoming environment for all our patients.
          We use the latest technology and techniques to deliver exceptional dental care to families
          and individuals of all ages.
        </p>
      </section>

    
      <section className="section">
        <h2>Meet Our Practitioners</h2>
        <div className="practitioners">
          <div className="practitioner-card">
            <img src="https://img.freepik.com/free-photo/front-view-male-nurse-hospital_23-2150796750.jpg" alt="Dr. Smith" />
            <h3>Dr.Smith</h3>
            <p>BDS, MDS &ndash; Orthodontist with 12+ years of experience.</p>
          </div>
          <div className="practitioner-card">
            <img src="https://img.freepik.com/free-photo/medium-shot-female-nurse-hospital_23-2150796754.jpg?t=st=1752345547~exp=1752349147~hmac=4b798ad2aeab7fd3898ca6e1d77124f3b90f08770b71e3840c8f1e4e322ba160&w=1380" alt="Dr. Kumari" />
            <h3>Dr.Kumari</h3>
            <p>BDS &ndash; General Dentist known for painless procedures and compassionate care.</p>
          </div>
        </div>
      </section>

      
      <section className="section mission">
        <h2>Our Mission</h2>
        <p>
          At BrightSmile, our mission is to provide patient-centered dental care in a safe, gentle, and professional manner.
          We believe in educating our patients, promoting preventive care, and making high-quality dental treatment accessible to all.
        </p>
      </section>
    </div>
  );
}
