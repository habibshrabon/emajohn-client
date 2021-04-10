import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Shipment = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = data => {
      // console.log('form submitted', data)
      const savedCart = getDatabaseCart();
      const orderDetails = {...loggedInUser, products: savedCart, shipping: data, orderTime: new Date()};

      fetch('https://damp-castle-62099.herokuapp.com/addOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
      })
      .then(res =>res.json())
      .then(data =>{
        if(data){
          processOrder();
          alert('Your order placed successfully');
        }
      })

    };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="row">
      <div className="col-md-6">
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
          <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
          {errors.name && <span className="error">Name is required</span>}
        
          <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}  placeholder="Your Email"/>
          {errors.email && <span className="error">Email is required</span>}
        
          <input name="address" ref={register({ required: true })}  placeholder="Your Address" />
          {errors.address && <span className="error">Address is required</span>}
        
          <input name="phone" ref={register({ required: true })}  placeholder="Your Phone Number"/>
          {errors.phone && <span className="error">Phone Number is required</span>}
          
          <input type="submit" />
        </form>
      </div>
      <div className="col-md-6">
        <h2>Please Payment</h2>
        <ProcessPayment></ProcessPayment>
      </div>
    </div>
  );
};

export default Shipment;