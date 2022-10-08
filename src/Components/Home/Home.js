import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../tshirt/Tshirt';
import './Home.css'
const Home = () => {
    const items = useLoaderData()
    const [tshirt , setTshirt] = useState([]);
    const addButtonHandler = item =>{
        const exist =tshirt.find(ts => ts._id === item._id);
        if(exist){
            alert('already added')
          
        }
        else{
            const newItem = [...tshirt,item];
        setTshirt(newItem)
        }
    }
    const removeItemHandle =  item =>{
        const remaining = tshirt.filter(ts => ts._id !== item._id);
        setTshirt(remaining)
    }
    return (
        <div className='tshirt-and-cart'>
            <div className='tshirt-container'>
                {
                    items.map(item => <Tshirt
                    key={item.index}
                    item = {item}
                    addButtonHandler = {addButtonHandler}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart tshirt={tshirt} removeItemHandle = {removeItemHandle}></Cart>
            </div>
        </div>
    );
};

export default Home;