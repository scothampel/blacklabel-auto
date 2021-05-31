import React from 'react';
import Photo from './Photo';
import './css/Portfolio.css';

export default function Portfolio() {
    return (
        <div className='container' id='portfolio'>
            <div className='row row-cols-1 row-cols-md-3 g-4 mt-0 mb-4'>
                <Photo photoUrl='/photos/1.jpg'/>
                <Photo photoUrl='/photos/2.jpg'/>
                <Photo photoUrl='/photos/3.jpg'/>
                <Photo photoUrl='/photos/4.jpg'/>
                <Photo photoUrl='/photos/5.jpg'/>
                <Photo photoUrl='/photos/6.jpg'/>
                <Photo photoUrl='/photos/7.jpg'/>
            </div>
        </div>
    )
}