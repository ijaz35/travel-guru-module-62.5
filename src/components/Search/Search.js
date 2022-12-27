import React, { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';
import map from '../../../src/images/map.png'
import FormHeader from '../FormHeader/FormHeader';

const Search = () => {
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div className='container '>
            <div>
                <FormHeader></FormHeader>
            </div>
            <div className='pt-5'>
                <div className="row mt-5 pt-5">

                    <div className="col-12 col-lg-8 py-5">
                        <p className='ps-4 ms-2'>252 stays Apr 13-22 3 guests</p>
                        <h2 className='ps-4 ms-2'>Stay in Cox's Bazar</h2>
                        {
                            details.map(detail => <Detail
                                key={detail.id}
                                detail={detail}
                            ></Detail>)
                        }
                    </div>
                    <div className="col-12 col-lg-4 mt-5 pt-5">
                        <img className='img-fluid  pt-5' src={map} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;