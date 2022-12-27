import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Detail = ({ detail }) => {
    const { name, specification, extra, flexibility, ratings, price, total, img } = detail;
    return (
        <div className='row'>
            <div className="col-12 col-md-6 px-0">
                <img className='img-fluid p-4' src={img} alt="" />
            </div>
            <div className="col-12 col-md-6 pt-3 mt-3">
                <h3 className='mb-4'>{name}</h3>
                <div className='mb-5'>
                    <p className='m-0'>{specification}</p>
                    <p className='my-2'>{extra}</p>
                    <p className='m-0'>{flexibility}</p>
                </div>
                <div>
                    <div className='d-flex align-items-center justify-content-start'>
                        <div>
                            <FontAwesomeIcon
                                style={{ color: '#F9A51A' }}
                                icon={faStar}
                                className='me-2'
                            ></FontAwesomeIcon>
                            {ratings}
                        </div>
                        <div className='ms-5'><span className='fw-bold'>${price}/</span>  night <span className='text-muted'>${total} total</span> </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Detail;