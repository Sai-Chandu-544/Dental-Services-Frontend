
import '../styles/footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>BrightSmile Dental Clinic</h3>
        <p>Your smile is our priority. We’re here to provide gentle and expert dental care.</p>

        <div className="footer-contact">
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> info@brightsmile.com</p>
          <p><strong>Address:</strong> 123 Smile Street, Hyderabad, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BrightSmile Dental Clinic. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
