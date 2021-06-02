import React from 'react';
import Photo from './Photo';
import './css/Portfolio.css';
import logo from './logo.svg';

export default function Portfolio() {
    // Change on photo addition until CMS integration
    let photoCount = 7;
    return (
        <div className='container' id='portfolio'>
            <div className='row row-cols-1 row-cols-md-3 g-4 mt-0 mb-4'>
                <Photo photoUrl='/photos/1.jpg' />
                <Photo photoUrl='/photos/2.jpg' />
                <Photo photoUrl='/photos/3.jpg' />
                <Photo photoUrl='/photos/4.jpg' />
                <Photo photoUrl='/photos/5.jpg' />
                <Photo photoUrl='/photos/6.jpg' />
                <Photo photoUrl='/photos/7.jpg' />
                { 9 % photoCount !== 0 &&
                    <div className={`col-md-${9 % photoCount * 4} d-none d-md-block`}>
                        <img src={logo} id='logo-ph' alt='Logo placeholder' />
                    </div>
                }
            </div>
        </div>
    )
}
