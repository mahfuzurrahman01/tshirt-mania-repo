import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [ house,setHouse ] = useContext(RingContext);
    return (
        <div>
            <p>my ahlia</p>
            <p>{house}</p>
            <button onClick={() => setHouse(house + 1)}>click</button>
        </div>
    );
};

export default Special;