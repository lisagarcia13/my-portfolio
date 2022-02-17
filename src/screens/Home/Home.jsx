import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-header">Lisa Garcia</h1>
      <h3 className="home-subheader"> Software Engineer</h3>
      <div>
        <p>
          Feel free to browse through my work and don't forget to connect with
          me through my contact page.
        </p>
        <img
          src="https://eportfolio.utm.my/artefact/file/download.php?file=540089&view=116143"
          alt="welcome"
          className="welcome"
        />
      </div>
      <Link to="/projects" style={{ textDecoration: "none" }}>
        {" "}
        <h3 className="home-link">View my work!</h3>
      </Link>
    </div>
  );
}
