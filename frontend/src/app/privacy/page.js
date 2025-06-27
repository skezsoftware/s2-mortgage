// app/privacy-policy/page.jsx
import React from "react";

export const metadata = {
  title: "Privacy Policy – S2 Mortgage",
  description: "How S2 Mortgage collects and protects personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main
      className="privacy-policy-page"
      style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}
    >
      <h1>S2 Mortgage – Privacy Policy</h1>
      <p>
        <em>Last updated: June 27, 2025</em>
      </p>

      <p>
        S2 Mortgage (&ldquo;S2 Mortgage,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy
        and is committed to protecting the personal information you share with
        us. This Privacy Policy explains what information we collect, how we use
        it, with whom we share it, and the choices you have. It applies to
        information collected through our website
        <strong> s2-mortgage.com </strong> and any related pages, forms, or
        communication channels linked to this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>
          <strong>Contact Information:</strong> Name, email, phone – via contact
          forms or communication
        </li>
        <li>
          <strong>Loan-related Information:</strong> Voluntarily provided info
          like loan amounts or property details
        </li>
        <li>
          <strong>Device & Usage Data:</strong> IP address, browser type, time
          spent, collected via cookies
        </li>
      </ul>
      <p>
        <strong>Note:</strong> We do <em>not</em> intentionally collect
        sensitive data through this site.
      </p>

      <h2>2. How We Use Your Information</h2>
      <ol>
        <li>Respond to your inquiries</li>
        <li>Assess your mortgage needs</li>
        <li>Improve the site experience</li>
        <li>Comply with legal obligations</li>
        <li>Send marketing materials (if opted in)</li>
      </ol>
      <p>We do not sell or rent your personal information.</p>

      <h2>3. When We Share Information</h2>
      <ul>
        <li>With service providers (e.g., hosting, analytics)</li>
        <li>To comply with law or protect safety/rights</li>
      </ul>

      <h2>4. Cookies and Tracking Technologies</h2>
      <p>
        We use essential and analytics cookies to improve your experience. You
        may disable cookies in your browser, but some features may not function
        properly.
      </p>

      <h2>5. Your Choices & Rights</h2>
      <ul>
        <li>
          You can contact us with any questions about how your information is
          used
        </li>
        <li>
          If you are a California resident, please include &ldquo;CCPA Request&rdquo; in the
          subject line when contacting us
        </li>
      </ul>

      <h2>6. Data Security</h2>
      <p>
        We use administrative and technical safeguards to protect your data.
        However, no online system is completely secure.
      </p>

      <h2>7. Children&rsquo;s Privacy</h2>
      <p>
        This site is not directed to children under 13. We do not knowingly
        collect their personal information.
      </p>

      <h2>8. Links to Other Sites</h2>
      <p>
        Our site may link to third-party websites. We are not responsible for
        their privacy practices.
      </p>

      <h2>9. Updates to This Policy</h2>
      <p>
        We may update this policy. Material changes will be posted here with an
        updated &ldquo;Last updated&rdquo; date.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        <strong>S2 Mortgage</strong>
        <br />
        845 15th Street, Ste. 103
        <br />
        San Diego, CA 92101
        <br />
        nicole@s2mortgage.com
        <br />
        (619) 540-0559
      </p>
    </main>
  );
}
