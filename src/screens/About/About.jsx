import React from "react";
import css from "../../photos/css3-logo-png-transparent.png";
import "./About.css";
import node from "../../photos/nodejs-1-logo.png";

export default function About() {
  return (
    <div>
      <h2>Who is Lisa?</h2>
      <p>
        A native Texan, who is mission driven and has a thirst for knowledge.
        Coming from a customer service background, my cheery attitude combined
        with my team experience allows me to adopt my new passion for coding and
        designing real world applications and bringing them into fruition. My
        ability to listen and incorporate feedback into my work strengthens my
        role as a natural leader and team player.
      </p>
      <p>
        My projects are an extension of my personality and fuels my desire to
        combine my passion of coding with my hobbies. When I'm not busy coding,
        I like to spend my time enjoying the finer things in life such as
        playing board games or expanding my plant collection. If you've come
        this far, enjoy this little website I've built and I hope to connect
        with you soon!
      </p>
      <h2>Technology</h2>
      <img
        src="http://assets.stickpng.com/thumbs/5847f5bdcef1014c0b5e489c.png"
        alt="html"
        className="about-image"
      />
      <img src={css} alt="css" className="about-image" />
      <img
        src="https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1&w=640"
        alt="js"
        className="about-image"
      />
      <img
        src="http://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png"
        alt="react"
        className="about-image"
      />
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
  );
}
