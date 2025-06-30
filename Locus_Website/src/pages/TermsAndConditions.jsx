import React from "react";
import "../styles/Footer/Terms.css";

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Locus – Terms and Conditions</h1>
      <p className="terms-effective-date">Effective Date: 30-06-2025</p>

      <section>
        <h2>1. Eligibility</h2>
        <p>
          You must be at least 15 years old to use Locus. By using the App, you
          confirm that you meet this age requirement and are legally permitted
          to enter into this agreement.
        </p>
      </section>

      <section>
        <h2>2. Account Creation and Security</h2>
        <ul>
          <li>
            Provide accurate and complete information including email, name, and
            date of birth.
          </li>
          <li>Email verification is required.</li>
          <li>Only one account per user is allowed.</li>
          <li>You are responsible for keeping your credentials secure.</li>
          <li>Report unauthorized account use immediately.</li>
        </ul>
      </section>

      <section>
        <h2>3. Acceptable Use</h2>
        <p>Do not:</p>
        <ul>
          <li>Use for illegal or harmful purposes.</li>
          <li>Harass or threaten others.</li>
          <li>Impersonate others or spread false information.</li>
          <li>Interfere with the app’s operations or security.</li>
        </ul>
      </section>

      <section>
        <h2>4. User Content</h2>
        <p>
          You retain ownership but grant us a license to use your content to
          operate and improve the app. Do not post illegal, hateful, or
          infringing content.
        </p>
      </section>

      <section>
        <h2>5. Private Messaging</h2>
        <p>
          Private chat is allowed only after mutual approval and must remain
          respectful.
        </p>
      </section>

      <section>
        <h2>6. Location Access</h2>
        <p>
          Locus requires real-time location access. Location spoofing is
          prohibited. Disabling location limits functionality.
        </p>
      </section>

      <section>
        <h2>7. Location Updates & Notifications</h2>
        <p>
          Location updates occur every 15 minutes by default. Opting out may
          delay notifications or messaging.
        </p>
      </section>

      <section>
        <h2>8. Multiple Accounts Policy</h2>
        <p>
          Only one account per user is allowed. Violations may lead to
          suspension or ban.
        </p>
      </section>

      <section>
        <h2>9. Data and Permissions</h2>
        <p>We request access to:</p>
        <ul>
          <li>Location – to connect with users nearby</li>
          <li>Camera and Media – for profile customization</li>
          <li>Notifications – to send updates</li>
        </ul>
      </section>

      <section>
        <h2>10. Termination</h2>
        <p>
          We may terminate accounts that violate these Terms or cause harm to
          the community.
        </p>
      </section>

      <section>
        <h2>11. Changes to These Terms</h2>
        <p>
          We may update these Terms and notify you via the App or email.
          Continued use implies acceptance.
        </p>
      </section>

      <section>
        <h2>12. Contact</h2>
        <p>📧 locusofficial22@gmail.com</p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
