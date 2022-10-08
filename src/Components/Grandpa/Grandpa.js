import React, { createContext, useState } from 'react';
import Aunty from '../aunty/Aunty';
import Father from '../Father/Father';
import Unlce from '../uncle/Unlce';
import './Grandpa.css'
export const RingContext = createContext('matir ring')
export const MoneyContext = createContext(555);
const Grandpa = () => {
    const [money, setMoney] = useState(555);
    const [house, setHouse] = useState(1);
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <MoneyContext.Provider value={[money, setMoney]}>
                <div className='grandpa flex'>
                    <Father></Father>
                    <Unlce></Unlce>
                    <Aunty></Aunty>
                </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;