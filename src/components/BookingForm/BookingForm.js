import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './BookingForm.css'

const BookingForm = () => {


    return (
        <div className='form-container bg-white p-4 mx-auto rounded-3'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicOrigin">
                    <Form.Label className='ps-1'>Origin</Form.Label>
                    <Form.Control type="text" placeholder="Start your journey from"
                        defaultValue='Dhaka' />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDestination">
                    <Form.Label className='ps-1'>Destination</Form.Label>
                    <Form.Control type="text" placeholder="Enter your destination"
                        defaultValue="Cox's Bazar" />
                </Form.Group>
                <div className='row'>
                    <div className="col-12 col-md-6">
                        <Form.Group className="mb-3" controlId="from">
                            <Form.Label className='ps-1'>From</Form.Label>
                            <Form.Control type="date" placeholder='Journey starts' />
                        </Form.Group>
                    </div>
                    <div className="col-12 col-md-6">
                        <Form.Group className="mb-3" controlId="from">
                            <Form.Label className='ps-1'>To</Form.Label>
                            <Form.Control type="date" placeholder='Journey ends' />
                        </Form.Group>
                    </div>
                </div>

                <Button className='booking-btn w-100 my-3' variant="warning" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default BookingForm;