import React from "react";
import { Link } from "react-router-dom";
import "./contact.scss";
export default function ContactPage() {
  return (
    <>
      <div className="container-fluid head ">
        <h1>Contact</h1>
        <div>
          <span className="icon">
            <i>
              <img src="https://img.icons8.com/windows/20/000000/home.png" />
            </i>
          </span>
          <span>
            <Link href="#" to="/" className="homeicon">
              Home Page
            </Link>
          </span>
          <span className="arrow">
            <i>
              <img src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/20/000000/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-13.png" />
            </i>
          </span>
        </div>
      </div>

      <div className="container">
        <div>
          <h1>Our Address</h1>
        </div>
        <div className="d-flex justify-content-around">
          <div className="d-flex leftlogo">
            <img src="https://arrrohinifoodproducts.com/wp-content/uploads/2022/01/ARR-RFP-LOGO-273.png"></img>
          </div>
          <div className="d-flex ">
            <h2>
              Rohini Food Products
              <br /> & <br />
              ARR SL Thamboolam Products
            </h2>
          </div>
          <div className="d-flex rightlogo">
            <img src="https://arrrohinifoodproducts.com/wp-content/uploads/2022/01/ARR-RFP-LOGO-273.png"></img>
          </div>
        </div>
      </div>
    </>
  );
}
