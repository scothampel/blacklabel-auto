import React from 'react';
import './css/Nav.css';
import logo from './logo.svg';

export default function Nav() {
    return (
        <nav className='navbar sticky-top navbar-expand-lg navbar-light pb-0'>
            <div className='container border-bottom border-dark pb-2'>
                <div className='row col m-0'>
                    <a className='navbar-brand d-flex align-items-center col-auto m-0' href='#app'>
                        <img src={logo} width='100px' alt='Black Label Auto Detailing' />
                        <h2 className='d-none d-md-inline d-lg-none ms-3 mb-0 font-primary'>BLACK LABEL AUTO DETAILING</h2>

                    </a>
                    <h4 className='d-md-none col-6 d-flex align-items-center font-primary text-wrap'>BLACK LABEL <br />AUTO DETAILING</h4>
                    <button className='navbar-toggler col-auto border-0 p-0 ms-auto' type='button' data-bs-toggle='collapse' data-bs-target='#navContent'>
                        <i className="bi bi-list"></i>
                    </button>
                </div>
                <div className='collapse navbar-collapse' id='navContent'>
                    <ul className='navbar-nav ms-lg-auto mb-lg-0 row'>
                        <li className='nav-item col-auto'>
                            <a className='nav-link link-black' href='#services'>SERVICES</a>
                        </li>
                        <li className='nav-item col-auto'>
                            <a className='nav-link link-black' href='#portfolio'>PORTFOLIO</a>
                        </li>
                        <li className='nav-item col-auto'>
                            <a className='nav-link link-black' href='#contact'>CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
