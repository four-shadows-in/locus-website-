import React from "react";
import "../styles/Footer/Privacy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Locus – Privacy Policy</h1>
      <p className="privacy-effective-date">Effective Date: 30-06-2025</p>

      <section>
        <h2>1. What Information We Collect</h2>
        <ul>
          <li>
            <strong>Personal Info:</strong> Name, date of birth, email address
            (with verification)
          </li>
          <li>
            <strong>Profile Details:</strong> Optional details you choose to
            provide
          </li>
          <li>
            <strong>Location Data:</strong> Your device’s real-time location
          </li>
          <li>
            <strong>Usage Data:</strong> Device info, app activity logs
          </li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>Register and manage your account</li>
          <li>Connect you with nearby users</li>
          <li>Enable personal chat and interaction features</li>
          <li>Send service updates and notifications</li>
          <li>Improve app features and user experience</li>
        </ul>
      </section>

      <section>
        <h2>3. Permissions We Request</h2>
        <ul>
          <li>
            <strong>Location:</strong> For regional user matching
          </li>
          <li>
            <strong>Camera/Media:</strong> For profile photo uploads
          </li>
          <li>
            <strong>Notifications:</strong> To alert you about interactions or
            updates
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Location and Matching</h2>
        <p>Your location is used only to group you with surrounding users.</p>
        <ul>
          <li>Exact location is not visible to others</li>
          <li>Location access is required for app functionality</li>
          <li>Falsifying or spoofing location is prohibited</li>
        </ul>
      </section>

      <section>
        <h2>5. Background Location Updates</h2>
        <p>
          Locus updates your location every 15 minutes (default), even when the
          app is not open.
        </p>
        <ul>
          <li>You can change this interval or disable updates in settings</li>
          <li>
            Disabling background access may reduce accuracy or cause delayed
            notifications
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Multiple Account Policy</h2>
        <p>
          Only one account per user is allowed. Duplicate/fake accounts may be
          removed or merged.
        </p>
      </section>

      <section>
        <h2>7. Data Sharing</h2>
        <p>We do not sell your data. We may share it:</p>
        <ul>
          <li>With third-party services under strict privacy terms</li>
          <li>As required by law</li>
          <li>During business transfers (e.g., mergers, acquisitions)</li>
        </ul>
      </section>

      <section>
        <h2>8. Chat and Communication Privacy</h2>
        <ul>
          <li>Messages are private and end-to-end encrypted</li>
          <li>Not monitored or stored unless required by law enforcement</li>
        </ul>
      </section>

      <section>
        <h2>9. Data Retention</h2>
        <ul>
          <li>Data is retained while your account is active</li>
          <li>Most data is deleted within 30 days of account deletion</li>
          <li>Some data may be retained longer for legal reasons</li>
        </ul>
      </section>

      <section>
        <h2>10. Security</h2>
        <p>
          We take reasonable steps to protect your data, but 100% security is
          not guaranteed. Please protect your credentials.
        </p>
      </section>

      <section>
        <h2>11. Your Choices</h2>
        <ul>
          <li>Update/delete your info in account settings</li>
          <li>Manage permissions via device settings</li>
          <li>Delete your account at any time</li>
        </ul>
      </section>

      <section>
        <h2>12. Policy Updates</h2>
        <p>
          We may revise this policy. Significant changes will be shared via the
          app or email.
        </p>
      </section>

      <section>
        <h2>13. Contact Us</h2>
        <p>📧 locusofficial22@gmail.com</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
