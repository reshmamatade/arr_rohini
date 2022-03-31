import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container ">
      <div className="mt-5 pt-5 pb-5 footer">
        <div className="row ">
          <div className="col-lg-5 col-xs-12 aboutCompany" id="foot">
            <h2>About Us</h2>
            <br />
            <p className="pr-5 text-black-50 ">
              The A.R.R. Group was founded in the year 1947, by late Sri.
              A.R.Ramaswamy, Ex. Member of Legislative Assembly, Tamil Nadu and
              Ex.Chairman of Kumbakonam Municipality.
            </p>
            <p className="medialogo">
              <a href="#">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png" />
              </a>
              <a href="#">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png" />
              </a>
              <a href="#">
                <img src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png" />
              </a>
            </p>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3">Useful Links</h4>
            <br />
            <ul className="m-0 p-0">
              <li>
                <Link href="#" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" to="/About">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" to="/Products">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 location">
            <h4 className="mt-lg-0 mt-sm-4">Contact Us</h4>
            <br />

            <p className="d-flex">
              <span>
                <i className="address">
                  <img src="https://img.icons8.com/pastel-glyph/20/26e07f/marker.png" />
                </i>
              </span>
              <span>
                No.153, A.R.R. Road, Kumbakonam, Thanjavur District, Tamil Nadu
                - 612001
              </span>
            </p>
            <p>
              <span>
                <i className="fa fa-phone mr-3 address">
                  <img src="https://img.icons8.com/ios/20/26e07f/phone.png" />
                </i>
              </span>
              <span>(+91)-8870909988</span>
            </p>
            <p>
              <span>
                <i className="fa fa-envelope-o mr-3 address">
                  <img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/20/26e07f/external-message-contact-flatart-icons-solid-flatarticons.png" />
                </i>
              </span>
              <span>contact@arrrohinifoodproducts.com</span>
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col copyright">
            <p>
              <div className="footer-copyright text-center py-3 ">
                © 2020 Copyright- – ARR Rohini Food Products. All rights
                reserved
                <br></br>
                Designed by Call Bharat – B2B & Digital Marketing Services
                Agency
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
