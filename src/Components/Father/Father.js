import React from 'react';
import Brother from '../brother/Brother';
import Myself from '../myself/Myself';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div>
            <p>Father</p>
            <section className='flex'>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;