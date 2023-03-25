import React from "react";

import "./style.css";

import LOGO from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header_inner">
        <img src={LOGO} alt="dukaan_logo" className="logo_style" />
        <div className="header_right_section">
          <p className="sign_in">Sign In</p>
          <div className="dukaan_button">
            <p className="dukaan_button_text">Dukaan for PC</p>
          </div>
        </div>
      </div>
    </div>
  );
}
