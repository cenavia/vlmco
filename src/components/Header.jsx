import React from "react";
import "../assets/styles/style.scss";

const Header = () => (
  <header className=" h-60">
    <navbar className=" flex justify-between content-center">
      <img src="https://img.icons8.com/cotton/64/000000/apple--v2.png" />
      <ul className="hidden md:flex">
        <li className="mr-4 text-black">About</li>
        <li className="mr-4 text-black">Articles</li>
        <li className="mr-4 text-black">Subscribe</li>
      </ul>
    </navbar>
  </header>
);

export default Header;
