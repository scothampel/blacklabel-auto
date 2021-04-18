import React from 'react';
import './css/Nav.css';
import logo from './logo-nobg.png';

export default function Nav() {
    return (
            <nav className='navbar sticky-top navbar-expand-lg navbar-light'>
                <div className='container border-bottom border-dark pb-2'>
                    <a className='navbar-brand d-flex align-items-center' href='#'>
                        <img src={logo} width='100px' alt='Black Label Auto Detailing'/>
                        <h2 className='d-none d-md-inline d-lg-none ms-3 mb-0 font-primary'>BLACK LABEL AUTO DETAILING</h2>
                    </a>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navContent'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navContent'>
                        <ul className='navbar-nav ms-lg-auto mb-lg-0 row'>
                            <li className='nav-item col-auto'>
                                <a className='nav-link link-black' href='#app'>SERVICES</a>
                            </li>
                            <li className='nav-item col-auto'>
                                <a className='nav-link link-black' href='#'>PORTFOLIO</a>
                            </li>
                            <li className='nav-item col-auto'>
                                <a className='nav-link link-black' href='#'>ABOUT</a>
                            </li>
                            <li className='nav-item col-auto'>
                                <a className='nav-link link-black' href='#'>CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}
