import React from "react";

let menu = [
  { label: "Home", url: "#" },
  { label: "About", url: "#" },
  { label: "Services", url: "#" },
  { label: "Contact", url: "#" },
];

const NavBar = () => {
  const navBarItems = menu.map((item, i) => (
    <li className="nav-item" key={i}>
      <a className="nav-link text-light" href={item.url}>
        {item.label}
      </a>
    </li>
  ));

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light ms-5" href="#">
          {" "}
          Welcome to After85{" "}
        </a>
        {/* Toggler when screen changes */}
        <button
          className="navbar-toggler bg-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar Items */}
          <ul className="navbar-nav ms-auto me-5">{navBarItems}</ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
