import React, { Component } from "react";

class NavbarComponent extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Counter App Navbar
          <span
            className="badge badge-pill badge-secondary"
            style={{ marginLeft: "10px" }}
          >
            {this.props.componentCount}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavbarComponent;
