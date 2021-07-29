import '../styles/Footer.css';

export default function Footer() {
    return (
        <div className='footer' id='contact'>
            <div className='container py-3'>
                <div className='row row-cols-1 row-cols-md-2 gy-2'>
                    <div className='col border-end border-white border-md'>
                        <div className='row text-center'>
                            <h1 className='font-primary'><b>Kevin Reissenweber</b></h1>
                            <h3>630.388.9670 (call or text)</h3>
                            <h3>St. Charles, IL</h3>
                            <h3>@black_labelautodetailing</h3>
                        </div>
                        <div className='row'>
                            <div className='col footer-social'>
                                <a className='footer-link' href='https://www.facebook.com/Blacklabelautodetails/' target='about:blank'>
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </div>
                            <div className='col footer-social'>
                                <a className='footer-link' href='https://www.instagram.com/black_labelautodetailing/' target='about:blank'>
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col border-start border-white border-md text-center'>
                        {/* Google map embed */}
                        <iframe title='STC Map' id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47493.007330405366!2d-88.35460037103438!3d41.929126036172946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f1e7b1aafbc77%3A0x611579fecbe919a2!2sSt.%20Charles%2C%20IL!5e0!3m2!1sen!2sus!4v1627595544100!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe>
                    </div>

                </div>
            </div>
        </div>
    )
}
