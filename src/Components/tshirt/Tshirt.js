import React from 'react';
import './Tshirt.css'
const Tshirt = ({item,addButtonHandler}) => {
    const {name,picture,price,id} = item;
    return (
        <div className='items'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <h2>${price}</h2>
            <button className='btn' onClick={() => addButtonHandler(item)}>Add to cart</button>
        </div>
    );
};

export default Tshirt;