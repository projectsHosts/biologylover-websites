import React from "react";
import "../.../../../styles/policesAndhelp/ploicesOrhelp.css";

const HelpSupport: React.FC = () => {
  return (
    <div className="static-page">
      <h1>Help & Support</h1>

      <section>
        <h2>How can we help you?</h2>
        <p>
          We are here to support you throughout your learning journey on
          BiologyLover. If you face any issues or have questions, please refer
          to the sections below.
        </p>
      </section>

      <section>
        <h2>Common Issues</h2>
        <ul>
          <li>Unable to log in or reset password</li>
          <li>Quiz not loading or submission failed</li>
          <li>Profile update issues</li>
          <li>Payment or access related problems</li>
        </ul>
      </section>

      <section>
        <h2>Contact Support</h2>
        <p>
          If your issue is not resolved, you can reach us at:
        </p>
        <p>
          📧 <strong>Email:</strong> support@biologylover.com  
          <br />
          ⏱ <strong>Response Time:</strong> Within 24–48 hours
        </p>
      </section>

      <section>
        <h2>Quiz & Learning Support</h2>
        <p>
          For quiz-related doubts, daily quiz errors, or leaderboard issues,
          please mention your registered email and quiz date while contacting
          support.
        </p>
      </section>
    </div>
  );
};

export default HelpSupport;
