import React from 'react';
// import fakeData from '../../fakeData';


const Inventory = () => {
    const handelAddProducts = () =>{
        const product = {};
        fetch('https://damp-castle-62099.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }
    return (
        <div>
            <form action="">
                <p><span>Name: </span><input type="text"/></p>
                <p><span>Price: </span><input type="text"/></p>
                <p><span>Quantity: </span><input type="text"/></p>
                <p><span>Product Image: </span><input type="file"/></p>
                <button onClick={handelAddProducts}>Add product</button>
            </form>
            
        </div>
    );
};

export default Inventory;