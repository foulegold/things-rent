import React from "react";
import s from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

{
  /* <FontAwesomeIcon className={s.color_red} icon={FaMapMarkerAlt} size="lg" /> */
}
const aboutUs = () => {
  return (
    <div className={[s.aboutUs + " " + s.card]}>
      <h3 className={s.title}>ABOUT US</h3>
      <span className={s.subtitle}>Сервис по аренде вещей</span>
      <ul className={s.list}>
        <li>
          <FontAwesomeIcon icon={faPhoneAlt} className={s.iconAwesome_red} />
          <a className={s.about_link}>+7 021 556 13 14</a>
        </li>
        <li>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className={s.iconAwesome_red}
          />
          <a className={s.about_link}>Moscow</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} className={s.iconAwesome_red} />
          <a className={s.about_link}>email@email.com</a>
        </li>
      </ul>
    </div>
  );
};
const categories = () => {
  return (
    <div className={s.card}>
      <h3 className={s.title}>CATEGORIES</h3>
      <ul className={s.list}>
        <li>
          <a href="#" className={s.link}>
            Hot deals
          </a>
        </li>
        <li>
          <a href="#" className={s.link}>
            Laptops
          </a>
        </li>
        <li>
          <a href="#" className={s.link}>
            Smartphones
          </a>
        </li>
        <li>
          <a href="#" className={s.link}>
            Cameras
          </a>
        </li>
        <li>
          <a href="#" className={s.link}>
            Accessories
          </a>
        </li>
      </ul>
    </div>
  );
};

const information = () => {
  return (
    <div className={s.card}>
      <h3 className={s.title}>information</h3>
      <ul className={s.list}>
        <li>
          <a href="#" className={s.link}>
            About Us
          </a>
        </li>
        <li>
          <a href="#" className={s.link}>
            Contact Us
          </a>
        </li>
        <li>
          <a href="#" className={s.link}>
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className={s.link}>
            Orders and Returns
          </a>
        </li>
        <li>
          <a href="#" className={s.link}>
            Terms & Conditions
          </a>
        </li>
      </ul>
    </div>
  );
};

const service = () => {
  return (
    <div className={s.card}>
      <h3 className={s.title}>service</h3>
      <ul className={s.list}>
        <li>
          <a href="#" className={s.link}>
            My Account
          </a>
        </li>
        <li>
          <a href="#" className={s.link}>
            View Cart
          </a>
        </li>
        <li>
          <a href="#" className={s.link}>
            Wishlist
          </a>
        </li>
        <li>
          <a href="#" className={s.link}>
            Track My Order
          </a>
        </li>
        <li>
          <a href="#" className={s.link}>
            Help
          </a>
        </li>
      </ul>
    </div>
  );
};
const footerBotton = () => {
  return (
    <div className={s.footer_botton}>
      <div className={s.title_copyright}>
        Copyright ©2021 All rights reserved | This template is made with by
        Colorlib
      </div>
    </div>
  );
};

const Footer = (props) => {
  return (
    <footer>
      <div className={s.footer}>
        <div className={s.container + " appContainer"}>
          <div className={s.wrapper_cards}>
            {aboutUs()}
            {categories()}
            {information()}
            {service()}
          </div>
        </div>
      </div>

      {footerBotton()}
    </footer>
  );
};

export default Footer;
