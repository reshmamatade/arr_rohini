import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    // <div>
    //   <div className="headUpper ">
    //     <div className="container">

    //       <div className="Email">E-mail: contact@arrrohinifoodproducts.com</div>
    //       <div className="Contact">Call: +91-88709 09988</div>
    //     </div>
    //   </div>
    //   <div>
    //     <div className="headLower ">
    //       <nav className=" navbar navbar-expand-lg navbar-light bg-light">
    //         <div className="container">
    //           <div className="Logo">
    //             <img src="https://arrrohinifoodproducts.com/wp-content/uploads/2021/03/arrrohinifplogo.jpg" />
    //           </div>

    //           <button
    //             className="navbar-toggler"
    //             type="button"
    //             data-toggle="collapse"
    //             data-target="#navbarNav"
    //             aria-controls="navbarNav"
    //             aria-expanded="false"
    //             aria-label="Toggle navigation"
    //           >
    //             <span className="navbar-toggler-icon"></span>
    //           </button>
    //           <div className="collapse navbar-collapse" id="navbarNav">
    //             <ul className="navbar-nav">
    //               <li className="nav-item active">
    //                 <Link className="nav-link" to="/">
    //                   <b> Home</b>
    //                 </Link>
    //               </li>
    //               <li className="nav-item">
    //                 <Link className="nav-link" to="/about">
    //                   <b> About</b>
    //                 </Link>
    //               </li>
    //               <li className="nav-item">
    //                 <Link className="nav-link" to="/products">
    //                   <b> Product</b>
    //                 </Link>
    //               </li>
    //               <li className="nav-item">
    //                 <Link className="nav-link" to="/contact">
    //                   <b>Contact</b>
    //                 </Link>
    //               </li>
    //             </ul>
    //             <ul class="navbar-nav sm-icons">
    //               <li class="nav-item">
    //                 <a class="nav-link" href="#">
    //                   <i class="fab fa-facebook-f"></i>
    //                 </a>
    //               </li>
    //               <li class="nav-item">
    //                 <a class="nav-link" href="#">
    //                   <i class="fab fa-instagram"></i>
    //                 </a>
    //               </li>
    //               <li class="nav-item">
    //                 <a class="nav-link" href="#">
    //                   <i class="fab fa-twitter"></i>
    //                 </a>
    //               </li>
    //               <li class="nav-item">
    //                 <a class="nav-link" href="#">
    //                   <i class="fab fa-pinterest-p"></i>
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //           <div className="socialogo">
    //             <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/60/000000/external-email-interface-kiranshastry-lineal-kiranshastry-1.png" />
    //             <img src="https://img.icons8.com/color/48/000000/whatsapp--v5.png" />
    //             <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
    //           </div>
    //         </div>
    //       </nav></div>
    //   </div>
    // </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a href="#" class="navbar-brand">
          Brand
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav">
            <a href="#" class="nav-item nav-link active">
              Home
            </a>
            <a href="#" class="nav-item nav-link">
              Profile
            </a>
            <a href="#" class="nav-item nav-link">
              Messages
            </a>
            <a href="#" class="nav-item nav-link disabled" tabindex="-1">
              Reports
            </a>
          </div>
          <div class="navbar-nav ms-auto">
            <a href="#" class="nav-item nav-link">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
