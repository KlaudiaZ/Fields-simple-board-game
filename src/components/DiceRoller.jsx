import React from 'react';

const DiceRoller = ({onThrowClick, diceStatus}) => {
    return (
        <div>
            <button onClick={() => {onThrowClick(1, 6)}}>{"Throw"}</button> {/*change the dice min and max results here*/}
            <div>
                {typeof diceStatus === "number" ? 
                    "Result: " + diceStatus : 
                    diceStatus}
            </div>
        </div>
    );
}

export default DiceRoller;