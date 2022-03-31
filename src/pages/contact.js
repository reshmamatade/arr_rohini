import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./contact.scss";

export default function ContactPage() {
  const [Name, setName] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [Subject, setSubject] = useState(" ");
  const [Message, setMessage] = useState(" ");

  const submit = (event) => {
    event.preventDefault();
    console.log("Name", Name);
    console.log("Email", Email);
    console.log("Subject", Subject);
    console.log("Message", Message);
  };
  return (
    <>
      <div>
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

        <div className="container contact">
          <div>
            <h1>Our Address</h1>
          </div>
          <div className="col-md-4 d-flex mid">
            <div className="d-flex leftlogo">
              <img src="https://arrrohinifoodproducts.com/wp-content/uploads/2022/01/ARR-RFP-LOGO-273.png"></img>
            </div>
            <div className="d-flex content ">
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
        <div className="container-fluid help">
          <div className="row-md-4  d-flex">
            <div className="d-flex locate">
              <span>
                <i>
                  <img src="https://img.icons8.com/ios/30/26e07f/marker--v1.png" />
                </i>
              </span>
              <div>
                <p>
                  Location <br /> No.153, A.R.R. Road, Kumbakonam, Thanjavur
                  District, Tamil Nadu - 612001
                </p>
              </div>
            </div>
            <div className="d-flex support">
              <span>
                <i>
                  <img src="https://img.icons8.com/ios/30/26e07f/phone.png" />
                </i>
              </span>
              <div>
                Support
                <p>Mobile: +(91) -88709 09988</p>
              </div>
            </div>
            <div className="d-flex">
              <span>
                <i>
                  <img src="https://img.icons8.com/ios/30/26e07f/clock--v1.png" />
                </i>
              </span>
              <div>
                Get In Touch
                <p>contact@arrrohinifoodproducts.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form">
        <div>
          <h1>
            <strong>Ready to Get Started?</strong>
          </h1>
        </div>
        <div>
          <label>Your Name</label>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={Name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label>Your Email</label>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={Email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>Subject</label>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={Subject}
            onChange={(event) => setSubject(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            for="FormControlTextarea1"
            class="form-label"
            value={Message}
            onChange={(event) => setMessage(event.target.value)}
          >
            Your message (optional)
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button className="btn btn-success" onClick={(e) => submit(e)}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
