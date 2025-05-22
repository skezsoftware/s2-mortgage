import "./footer.css";

export default function Footer() {
  return (
    <footer style={{ padding: "1rem" }} className="footer">
      <div>
        <p>&copy; 2023 S2 Mortgage. All rights reserved.</p>
      </div>
      <div>
        <p>Privacy Policy | Terms of Service</p>
      </div>
      <div>
        <p>845 15th Street, Ste. 103</p>
        <p>San Diego, CA 92101</p>
      </div>
      <div>
        <p>(619) 540-0559</p>
        <p>info@s2mortgage.com</p>
      </div>
    </footer>
  );
}
