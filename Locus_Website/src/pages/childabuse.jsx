import React from "react";
import "../styles/Footer/childabuse.css";

const ChildSafetyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">
        Locus – Child Safety & CSAE Prevention Policy
      </h1>
      <p className="privacy-effective-date">Effective Date: 30-06-2025</p>

      <section>
        <h2>1. Our Commitment</h2>
        <p>
          At Locus, we are firmly committed to protecting all users, especially
          children, from any form of harm, exploitation, or abuse. We strictly
          prohibit content that involves child sexual abuse or exploitation
          (CSAE).
        </p>
      </section>

      <section>
        <h2>2. Zero Tolerance for CSAE</h2>
        <p>
          We do not allow any content, media, or interaction that depicts or
          promotes child sexual abuse or exploitation. Accounts involved in such
          activity will be banned, and the content will be reported to relevant
          authorities.
        </p>
      </section>

      <section>
        <h2>3. Reporting Abuse</h2>
        <p>
          Users can report inappropriate or harmful behavior directly through
          our in-app report feature. Reports are collected securely through a
          Google Form and reviewed by our moderation team.
        </p>
        <p>
          🔗{" "}
          <a
            href="https://forms.gle/xs7NtceJkbFbgGZn7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Report Abuse
          </a>
        </p>
      </section>

      <section>
        <h2>4. Moderation Practices</h2>
        <ul>
          <li>Public messages are automatically deleted after 12 hours.</li>
          <li>Reports are manually reviewed by our internal team.</li>
          <li>
            We are working to implement automated moderation tools to improve
            detection of abuse.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Cooperation with Authorities</h2>
        <p>
          In accordance with applicable laws, Locus fully cooperates with law
          enforcement and child protection organizations. If we receive a report
          of CSAE, we will act promptly and report to the appropriate regional
          or national authorities.
        </p>
      </section>

      <section>
        <h2>6. Contact for CSAE-Related Issues</h2>
        <p>
          📧 <strong>locusofficial22@gmail.com</strong>
          <br />
          For any concerns related to child safety or CSAE, please reach out to
          our designated contact email above.
        </p>
      </section>
    </div>
  );
};

export default ChildSafetyPolicy;
