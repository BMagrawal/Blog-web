import { Link  } from "react-router-dom";
import React from 'react';
import { HashLink } from "react-router-hash-link";



function Header() {
  return (
    <nav>
      <h1>YoYo</h1>
        <main>
                <HashLink to={"/#home"}>Home</HashLink>
                <Link to={"/Contect"}>Contect</Link>
                <HashLink to={"/#About"}>About</HashLink>
                <HashLink to={"/#Brands"}>Brands</HashLink>
                <Link to={"/Services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header
