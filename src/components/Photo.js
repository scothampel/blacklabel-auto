export default function Photo({photoUrl}) {
    return (
        <div className='col'>
            <img src={photoUrl} className='img-fluid img-thumbnail border-dark border-1 rounded-0 p-0' alt='Portfolio entry' />
        </div>
    )
}
