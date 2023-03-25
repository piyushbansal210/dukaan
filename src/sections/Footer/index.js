import React from "react";

import "./style.css";

import LOGO from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footer_top_left">
          <img src={LOGO} />
        </div>
        <div className="footer_top_right">
          <div className="footer_top_right_inner">
            <div>
              <span>Contact</span>
              <span>FAQ's</span>
              <span>&nbsp;</span>
            </div>
            <div>
              <span>Tutorial</span>
              <span>Blogs</span>
              <span>&nbsp;</span>
            </div>
            <div>
              <span>Privacy</span>
              <span>Banned Items</span>
              <span>&nbsp;</span>
            </div>
            <div>
              <span>About</span>
              <span>Jobs</span>
              <span>&nbsp;</span>
            </div>
            <div>
              <span>Facebook</span>
              <span>Twitter</span>
              <span>Linkedin</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <p>Dukaan 2020, All rights reserved.</p>
        <div className="footer-bottom-map-align">
          <span>Made In</span>
          <img src={require("../../assets/images/india.png")} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
