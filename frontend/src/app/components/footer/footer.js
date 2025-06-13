import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 S2 Mortgage. All rights reserved.</p>
        <p>
          <FaMapMarkerAlt /> 845 15th Street, Ste. 103, San Diego, CA 92101
        </p>
        <p>
          <FaPhoneAlt /> (619) 540-0559
        </p>
        <p>
          <FaEnvelope /> nicole@s2mortgage.com
        </p>
      </div>
      <div className="footer-privacy">
        Privacy Policy | Terms of Service
      </div>
    </footer>
  );
}
