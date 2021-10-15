import React, { Component } from "react";
import { connect } from "react-redux";
import "./Navbar.scss";
import {} from "./../../actions";
import tangerineLogo from "./../../images/tdraft_tangerine.png";

class Navbar extends Component {
  render() {
    return (
      <div className="navContainer">
        <nav className="logoContainer">
          <img
            // className="logo animate__animated"
            className="navLogo"
            src={tangerineLogo}
            alt="tdraft Tangerine Logo"
          />
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { })(
  Navbar
);
