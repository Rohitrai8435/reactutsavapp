import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import "./footer.css";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Footer = () => {
  return (
    <ContentWrapper>
      <footer className="footer">
        <div className="wrapper">
          <div className="container">
            <p>Home</p>
            <div className="home">
              <p className="text">Categories</p>
              <p className="text">Devices</p>
              <p className="text">Pricing</p>
              <p className="text">FAQ</p>
            </div>
          </div>
          <div className="container">
            <p>Movies</p>
            <div className="home">
              <p className="text">Genres</p>
              <p className="text">Trending</p>
              <p className="text">New Release</p>
              <p className="text">Popular</p>
            </div>
          </div>
          <div className="container">
            <p>Shows</p>
            <div className="home">
              <p className="text">Genres</p>
              <p className="text">Trending</p>
              <p className="text">New Release</p>
              <p className="text">Popular</p>
            </div>
          </div>
          <div className="container">
            <p>Support</p>
            <div className="home">
              <p className="text">Contact Us</p>
            </div>
          </div>
          <div className="container">
            <p>Subscriptions</p>
            <div className="home">
              <p className="text">Plans</p>
              <p className="text">Features</p>
            </div>
          </div>
          <div className="container">
            <p>Connect with us</p>
            <div className="home contact">
              <span className="icon">
                <FaFacebookF />
              </span>
              <span className="icon">
                <FaInstagram />
              </span>
              <span className="icon">
                <FaTwitter />
              </span>
              <span className="icon">
                <FaLinkedin />
              </span>
            </div>
          </div>
        </div>
        <p className="copyrights text">@2023 Utsav. All Rights Reserved</p>
      </footer>
    </ContentWrapper>
  );
};

export default Footer;
