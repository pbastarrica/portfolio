import React from "react";

const Links = () => (
  <div>
    <p>
      <a href="mailto:hi@pbastarrica.com">
        <img src="/img/maillogo.png" width="32" height="32" alt="mail" />
      </a>
    </p>
    <p>
      <a
        href="https://www.linkedin.com/in/pbastarrica"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/img/linkedinlogo.png"
          width="32"
          height="32"
          alt="Linkedin"
        />
      </a>
    </p>
    <p>
      <a
        href="https://drive.google.com/file/d/18KFh9tvZHujZDxEcWGCtLATNAOlZ6dA0/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/img/resumelogo.png" width="32" height="32" alt="resume" />
      </a>
    </p>
  </div>
);

export default Links;
