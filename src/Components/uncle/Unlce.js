import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Unlce = () => {
    const [money,setMoney] = useContext(MoneyContext)
    return (
        <div>
            <p>Uncle</p>
            <p>{money}</p>
            <button onClick={() => setMoney(money + 100)}>Add 100</button>
        </div>
    );
};

export default Unlce;