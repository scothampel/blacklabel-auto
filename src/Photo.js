import React from 'react'

export default function Photo({photoUrl}) {
    return (
        <div className='col'>
            <img src={photoUrl} className='img-fluid img-thumbnail' alt='Portfolio entry' />
        </div>
    )
}
