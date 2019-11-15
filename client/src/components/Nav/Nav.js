import React from "react";

const style = {
  navbar: {
    backgroundColor: "grey"
  }
}

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={style.navbar}>
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
    </nav>
  );
}

export default Nav;
