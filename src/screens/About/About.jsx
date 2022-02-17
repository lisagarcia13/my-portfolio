import React from "react";
import css from "../../photos/css3-logo-png-transparent.png";
import "./About.css";
import node from "../../photos/nodejs-1-logo.png";
import html from "../../photos/html.png";
import react from "../../photos/react.png";

export default function About() {
  return (
    <div className="about-container">
      <h2 className="about-header">Who is Lisa?</h2>
      <img
        src="https://i.pinimg.com/originals/9c/b1/59/9cb159ed669f59d43cf2abc56c33f6a4.gif"
        alt="cool"
      />
      <p className="about-text">
        A native Texan, who is mission driven and has a thirst for knowledge.
        Coming from a customer service background, my cheery attitude combined
        with my team experience allows me to adopt my new passion for coding and
        designing real world applications and bringing them into fruition. My
        ability to listen and incorporate feedback into my work strengthens my
        role as a natural leader and team player.
      </p>
      <p className="about-text">
        My projects are an extension of my personality and fuels my desire to
        combine my passion of coding with my hobbies. When I'm not busy coding,
        I like to spend my time enjoying the finer things in life such as
        playing board games or expanding my plant collection. If you've come
        this far, enjoy this little website I've built and I hope to connect
        with you soon!
      </p>
      <h2 className="about-subheader">Technology</h2>
      <div className="tech-container">
        <img src={html} alt="html" className="about-image" />
        <img src={css} alt="css" className="about-image" />
        <img
          src="https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1&w=640"
          alt="js"
          className="about-image"
        />
        <img src={react} alt="react" className="about-image" />
        <img
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png"
          alt="mongodb"
          className="about-image"
        />

        <img src={node} alt="node" className="about-image" />
        <img
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/python_vertical_logo_icon_168039.png"
          alt="python"
          className="about-image"
        />

        <img
          src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-ar21.png"
          alt="flask"
          className="about-image"
        />
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png"
          alt="psql"
          className="about-image"
        />
        <img
          src="https://www.djangoproject.com/m/img/logos/django-logo-positive.png"
          alt="django"
          className="about-image-long"
        />
        <img
          src="https://camo.githubusercontent.com/0566752248b4b31b2c4bdc583404e41066bd0b6726f310b73e1140deefcc31ac/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67"
          alt="express"
          className="about-image-long"
        />
      </div>
    </div>
  );
}
