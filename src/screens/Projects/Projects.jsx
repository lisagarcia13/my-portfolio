import React from "react";
import name from "../../photos/pocketdex.png";

export default function Projects() {
  return (
    <div>
      <div>
        <h2>PocketDex</h2>
        <img src={name} alt="pokemon" />
        <p>
          PocketDex is a pokedex that was created using HTML, CSS and vanilla
          JS. The data was gathered using the Pokemon API.
        </p>
        <a href="https://lisagarcia13.github.io/PocketDex/">Live Site</a>
        <br />
        <a href="https://github.com/lisagarcia13/PocketDex">Github</a>
      </div>

      <div>
        <h2>What's in the Salsa?</h2>
        <img
          src="https://cdn.pixabay.com/photo/2015/03/06/23/35/pepper-662550_960_720.jpg"
          alt="peppers"
        />
        <p>
          An app that is built using React, Airtable, and MUI that allows users
          to blog and share salsa recipes.Users will be able to see salsa's in
          their respective catergories of mild, medium and hot.
        </p>
        <a href="https://sleepy-gates-e6ddfb.netlify.app/">Live Site</a>
        <br />
        <a href="https://github.com/lisagarcia13/whats-in-the-salsa">Github</a>
      </div>

      <div>
        <h2>RNLH</h2>
        <img
          src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641316329/apparel-ga341b623f_1920_bomxmz.jpg"
          alt="rnlh logo"
        />
        <p>
          A full stack website built together in a group. Built using React on
          frontend and MongoDB on the backend. Users can create accounts and
          post their listing of items they want to sell.
        </p>

        <a href="https://rnlh.netlify.app">Live Site</a>
        <br />
        <a href="https://github.com/rodennis/RNLH">Github</a>
      </div>
      <div>
        <h2>GreatReads</h2>
        <img
          src="https://cdn.pixabay.com/photo/2017/03/17/10/29/coffee-2151200_1280.jpg"
          alt="coffee and book"
        />
        <p>
          GreatReads is a website where users can lookup books and authors. It
          is a fullstack website that has React on frontend and Django REST on
          backend. It has full CRUD functionality for both authors and books
          once users are logged in.
        </p>
        <a href="https://great-reads.netlify.app/">Live Site</a>
        <br />
        <a href="https://github.com/lisagarcia13/great-reads">Github</a>
      </div>
    </div>
  );
}
