import '../styles/Services.css';

export default function Services() {
    return (
        <div className='container' id='services'>
            <div className='row row-cols-1 row-cols-md-3 g-4 mt-0 mb-4'>
                <div className='col'>
                    <div className='card card-black border-0'>
                        <div className='card-body'>
                            <h4 className='card-title font-primary'>Full Interior / Exterior Detail<br/>$225.00</h4>
                            <hr />
                            <ul>
                                <li>Hand washed exterior</li>
                                <li>Wheels and wheel wells receive a deep clean</li>
                                <li>Door jams washed</li>
                                <li>Full exterior of the vehicle receives a layer of Carnuba Wax</li>
                                <li>Thorough vacuum of the interior including the trunk</li>
                                <li>Salt removal</li>
                                <li>Intensive wipe down of the interior</li>
                                <li>Cup holders and all compartments brushed</li>
                                <li>Leather seat treatment; cloth seats shampooed</li>
                                <li>Clean all glass inside and out</li>
                            </ul>
                            <p className='card-text'><i>Pick-up and delivery of vehicle available</i></p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card card-black border-0'>
                        <div className='card-body'>
                            <h4 className='card-title font-primary'>Full Interior Detail<br/>$125.00</h4>
                            <hr />
                            <ul>
                                <li>Thorough vacuum of the interior including the trunk</li>
                                <li>Salt removal</li>
                                <li>Floor mats get scrubbed / shampooed (depending on material)</li>
                                <li>Intensive wipe down of the interior</li>
                                <li>Cup holders and all compartments brushed</li>
                                <li>Leather seat treatment; cloth seats shampooed</li>
                                <li>Clean all glass inside</li>
                            </ul>
                            <p className='card-text'><i>Pick-up and delivery of vehicle available</i></p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card card-black border-0'>
                        <div className='card-body'>
                            <h4 className='card-title font-primary'>Full Exterior Ceramic Detail<br/>$150.00</h4>
                            <hr />
                            <ul>
                                <li>Hand washed exterior</li>
                                <li>Wheels and wheel wells receive a deep clean</li>
                                <li>Door jams washed</li>
                                <li>Full exterior of the vehicle receives a layer of Adams ceramic spray coating</li>
                                <li>Clean all exterior glass</li>
                                <li className='li-check'> <i>8 months of protection on your paint</i></li>
                                <li className='li-check'> <i>Coating prevents dirt, mud, salt, oil, tar and brake dust from sticking to your vehicle and damaging it over time</i></li>
                            </ul>
                            <p className='card-text'><i>Pick-up and delivery of vehicle available</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
