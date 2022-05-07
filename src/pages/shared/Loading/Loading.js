import React from 'react';
import { Spinner } from 'react-bootstrap';


const Loading = () => {
    return (
        <div className=' d-flex justify-content-center pt-5' style={{height:"100vh"}}>
            <Spinner animation="border" variant="primary" />
            <h3 className='ps-5 text-primary'>loading...</h3>
        </div>
    );
};

export default Loading;