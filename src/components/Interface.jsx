import React from 'react';
import './styles/Interface.css';
import DiceRoller from './DiceRoller';

const Interface = ({onThrow, diceStatus}) => {
    return (
        <div className="interface">
            <DiceRoller onThrowClick={onThrow} diceStatus={diceStatus} />
        </div>
    );
}

export default Interface;