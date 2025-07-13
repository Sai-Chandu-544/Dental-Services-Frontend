import { useState } from 'react';
import { Link  } from 'react-router-dom';

import '../styles/header.css';

export const Header = () => {
  const [activeNav, setActiveNav] = useState("");

  return (
    <nav className="navbar">
      <h2 className="logo">DentalCare</h2>
      <ul className="nav-links">
        <li>
  <Link
    to="/"
   
           className={activeNav === "home" ? "active" : ""}
            onClick={() => setActiveNav("home")}
  >
    HOME
  </Link>
</li>




        <li>
          <Link
            to="/about"
          

           className={activeNav === "about" ? "active" : ""}
            onClick={() => setActiveNav("about")}
           
          >
         ABOUT US
          </Link>
        </li>

        <li>
          <Link
            to="/services"
            className={activeNav === "services" ? "active" : ""}
            onClick={() => setActiveNav("services")}
          >
            SERVICES
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className={activeNav === "contact" ? "active" : ""}
            onClick={() => setActiveNav("contact")}
          >
            CONTACT
          </Link>
        </li>

        {/* <li>
          <Link
            to="/faq"
           
   
           
          
            className={activeNav === "faq" ? "active" : ""}
            onClick={() => setActiveNav("faq")}
           
          >
            FAQ
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};
