import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { Navbar, Container, Nav } from "react-bootstrap";

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
    //             <div className="socialogo">
    //             <ul className="navbar-nav sm-icons">
    //               <li className="nav-item">
    //               <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/60/000000/external-email-interface-kiranshastry-lineal-kiranshastry-1.png" />
    //           </li>
    //               <li className="nav-item">
    //               <img src="https://img.icons8.com/color/48/000000/whatsapp--v5.png" />
    //                </li>
    //               <li className="nav-item">
    //               <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
    //                </li>
    //                </ul>
    //           </div>
    //           </div>
    //         </div>
    //       </nav>
    //       </div>
    //   </div>
    // </div>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
