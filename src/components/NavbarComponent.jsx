import React, { Component } from "react";

class NavbarComponent extends Component {
  state = {};

  render() {
    const componentCount = this.props.componentCount;
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Counter App Navbar
          <span
            className="badge badge-pill badge-secondary"
            style={{ marginLeft: "10px" }}
          >
            {componentCount}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavbarComponent;
