import React from 'react';
import './Cart.css'
const Cart = ({tshirt , removeItemHandle}) => {
   
    return (
        <div>
            <p className={tshirt.length > 0 ? 'green' : 'red'}>Quantity: {tshirt.length}</p>
            {
                tshirt.map(ts =><p key={ts.index}>{ts.name} <button onClick={()=> removeItemHandle(ts)}>X</button></p>)
            }
              
        </div>
    );
};

export default Cart;