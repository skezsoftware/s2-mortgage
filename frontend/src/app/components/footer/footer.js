import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./footer.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 S2 Mortgage. All rights reserved.</p>
        <p>
          <FaMapMarkerAlt /> 845 15th Street, Ste. 103, San Diego, CA 92101
        </p>
        <p>
          <FaPhoneAlt /> (619) 540-0559
        </p>
        <p>
          <FaEnvelope /> nicole@s2mortgage.com
        </p>
        <p>Licensed in California, DRE &#35;01872714</p>
        <p>NMLS &#35;2583860</p>
        <p>
          <a
            href="/privacy"
            className="privacy-policy-link"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Privacy Policy
          </a>
        </p>
      </div>
      <div className="equal-housing-section">
        <Image
          alt="Equal Housing Opportunity Logo"
          src="/equal-housing-opportunity-logo.png"
          width={100}
          height={107}
          className="equal-housing-image"
        />
      </div>
    </footer>
  );
}
