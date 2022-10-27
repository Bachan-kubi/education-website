import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center m-5'>
            <h2>Page Not found.</h2>
            <p>Please go back to <Link to='/'>Home</Link> </p>

        </div>
    );
};

export default Error;