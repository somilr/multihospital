import React from 'react';
import { NavLink } from 'react-router-dom';
import Alert from '../Alert';
import {useSelector} from 'react-redux';

function Header(props) {

    let auth = useSelect3or(state=>state.auth)
    console.log(auth);

    return (
        <div>
            <div className="main-header">
                <div id="topbar" className="d-flex align-items-center fixed-top">
                    <div className="container d-flex justify-content-between">
                        <div className="contact-info d-flex align-items-center">
                            <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                            <i className="bi bi-phone" /> +91 9988776655
                        </div>
                        <div className="d-none d-lg-flex social-links align-items-center">
                            <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                            <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                            <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                            <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
             </div>
                    </div>
                </div>
                <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center">
                        <div className="logo">
                            <a href="index.html">
                                <h1 className="logo me-auto">City</h1><br />
                                <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                            </a>
                        </div>
                        <nav id="navbar" className="navbar order-last order-lg-0">
                            <ul>
                                <li>
                                    <NavLink  to= {"/"} className="nav-link scrollto active">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/Departments"} className="nav-link scrollto">Department</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/doctor"} className="nav-link scrollto">Doctor</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/About"} className="nav-link scrollto">About</NavLink>
                                </li>
                                { <li>
                                    <NavLink to={"/Medicine"} className="nav-link scrollto">Medicine</NavLink>
                                </li> }
                                <li>
                                    <NavLink to={"/Contact"} className="nav-link scrollto">Contact</NavLink>
                                </li> 
                                {/* <li>
                                    <NavLink to={"/Contactlist"} className="nav-link scrollto">Contactlist</NavLink>
                                </li>  */}
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle" />
                        </nav>
                        <NavLink to={"/Appointment"} className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span>
                            Appointment</NavLink>
                          
                        { <NavLink to={"/Auth"} className="appointment-btn scrollto">
                            <span className="d-none d-md-inline">Login/ Signup</span>
                        </NavLink> 
                        }
                    </div>
                    <Alert/>
                </header>
            </div>


        </div>
    );
}

export default Header;