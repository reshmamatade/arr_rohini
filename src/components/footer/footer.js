import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">About Us</h5>
            <p>
              The A.R.R. Group was founded in the year 1947, by late Sri.
              A.R.Ramaswamy, Ex. Member of Legislative Assembly, Tamil Nadu and
              Ex.Chairman of Kumbakonam Municipality.
            </p>
            <div>
              <img src="https://img.icons8.com/small/16/000000/twitter.png" />
              <img src="https://img.icons8.com/material-outlined/24/000000/facebook-new.png" />
              <img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" />
            </div>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled ">
              <li className="home">
                <a href="#!">Home</a>
              </li>
              <li className="home">
                <a href="#!">About Us</a>
              </li>
              <li className="home">
                <a href="#!">Products</a>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Contact us</h5>
            <ul className="list-unstyled">
              <li>
                <img />
                No.153, A.R.R. Road, Kumbakonam, Thanjavur District, Tamil Nadu
                - 612001
              </li>
              <li>
                <img />
                +(91) -88709 09988
              </li>
              <li>
                <img />
                contact@arrrohinifoodproducts.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="last">
        <div className="footer-copyright text-center py-3 ">
          © 2020 Copyright- – ARR Rohini Food Products. All rights reserved
          <br></br>
          Designed by Call Bharat – B2B & Digital Marketing Services Agency
        </div>
      </div>
    </footer>
  );
}
