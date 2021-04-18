import React from 'react';
import './css/Footer.css';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='container py-3'>
                <div className='row'>
                    <div className='col footer-social'>
                        <a className='footer-link' href='https://www.facebook.com/Blacklabelautodetails/' target='about:blank'>
                            <i class="bi bi-facebook"></i>
                        </a>
                    </div>
                    <div className='col footer-social'>
                        <a className='footer-link' href='https://www.instagram.com/black_labelautodetailing/' target='about:blank'>
                            <i class="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
