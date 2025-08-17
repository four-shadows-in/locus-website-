import React from "react";
import "../styles/Footer/Privacy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Locus – Privacy Policy</h1>
      <p className="privacy-effective-date">Effective Date: 17-08-2025</p>

      <section>
        <h2>1. Information We Collect</h2>
        <ul>
          <li>
            <strong>Personal Information:</strong> We collect your name,
            username, gender, Date of Birth, and verified email address.
          </li>
          <li>
            <strong>Location Information:</strong> Used strictly to connect you
            with nearby users. Your exact location is never stored or visible to
            others or us.
          </li>
          <li>
            <strong>Profile Image:</strong> You may optionally upload a photo
            for your profile.
          </li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>Create and manage your user account.</li>
          <li>Help connect you with nearby users based on location.</li>
          <li>Send relevant notifications and alerts.</li>
          <li>Ensure platform security and integrity.</li>
        </ul>
      </section>

      <section>
        <h2>3. Permissions We Request</h2>
        <ul>
          <li>
            <strong>Location:</strong> To connect you with nearby users. Not
            stored or displayed.
          </li>
          <li>
            <strong>Media:</strong> To upload a profile picture.
          </li>
          <li>
            <strong>Notifications:</strong> To send app-related updates.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Use of Location</h2>
        <ul>
          <li>Your location is only used for connecting with nearby users.</li>
          <li>We do not store or access your location beyond that use.</li>
          <li>Your location is never shown to other users.</li>
        </ul>
      </section>

      <section>
        <h2>5. Private Messaging</h2>
        <p>
          Our app allows private messaging between users only after mutual
          approval. Messages are stored securely and are not shared with third
          parties, except as required by law or for safety/security purposes. We
          do not access or monitor private messages unless necessary to
          investigate violations of our policies or legal obligations.
        </p>
      </section>

      <section>
        <h2>6. Account Policy</h2>
        <p>
          Each user may create only one account. Duplicate accounts are not
          allowed and may be removed.
        </p>
      </section>

      <section>
        <h2>7. Data Sharing</h2>
        <p>
          We do <strong>not</strong> share, sell, rent, or disclose your data to
          any third parties. Your information is used solely within the app for
          its intended purposes.
        </p>
      </section>

      <section>
        <h2>8. Data Security</h2>
        <p>
          We implement reasonable technical and organizational safeguards to
          protect your information. However, no digital system is entirely
          secure.
        </p>
      </section>

      <section>
        <h2>9. Children’s Privacy</h2>
        <p>
          This app is not intended for children under 13 years of age. If we
          discover we’ve collected data from a child, we will promptly delete
          it.
        </p>
      </section>

      <section>
        <h2>10. Account Deletion</h2>
        <p>
          You can delete your account at any time directly from the app. Once
          you confirm deletion, your account and associated data will be
          permanently removed with immediate effect. This action is
          irreversible, and we will not be able to recover your account or data
          once deleted. Please note that in certain cases, we may be required to
          retain limited information for legal or security reasons.
        </p>
      </section>

      <section>
        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. Major changes will be
          communicated through the app or via email with an updated effective
          date.
        </p>
      </section>

      <section>
        <h2>12. Contact Us</h2>
        <p>📧 locusofficial22@gmail.com</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
