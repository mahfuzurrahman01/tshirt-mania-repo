import React, { useContext } from 'react';
import { GoldContext } from '../Grandpa/Grandpa';
import Special from '../special/Special';

const Myself = () => {
    const [gold,setGold]= useContext(GoldContext)
    return (
        <div>
            <p>Myself</p>
            <p>{gold}</p>
            <button onClick={()=> setGold(gold + 2)}>More</button>
            <Special></Special>
        </div>
    );
};

export default Myself;