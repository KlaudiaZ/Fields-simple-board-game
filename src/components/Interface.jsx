import React from 'react';
import './styles/Interface.css';
import Dice from './Dice';

const Interface = ({onThrow}) => {
    
    const handleThrowClick = (min, max) => {
        const result = Math.round(Math.random() * (max - min) + min);
        console.log(result);
        onThrow(result);
        return result;
    }

    return (
        <div className="interface">
            <Dice onThrowClick={handleThrowClick} />
        </div>
    );
}

export default Interface;