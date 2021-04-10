import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitForm from './SplitForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IeOHdEPKgUGCeOdDicojypIybWT4gSZx9XD79DnLR0y6O2kjWjXBME4YxXGrV81zPTcdM5zHoF57Dq86vy4KYwC00RaTNATG3');


const ProcessPayment = ({handelPayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handelPayment={handelPayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;