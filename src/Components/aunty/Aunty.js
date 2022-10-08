import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <p>Aunty</p>
            <p>gift : {ring}</p>
        </div>
    );
};

export default Aunty;