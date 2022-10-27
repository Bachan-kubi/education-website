import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const carts = useLoaderData();
    console.log(carts);
    return (
        <div>
            <h3>This is Checkout Page</h3>
        </div>
    );
};

export default Checkout;