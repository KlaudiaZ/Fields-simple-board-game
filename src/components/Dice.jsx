import React from 'react';

const Dice = ({onThrowClick}) => {

    return (
        <div>
            <button onClick={onThrowClick()}>{"Throw"}</button>
            <div>
                
            </div>
        </div>
    );
}

export default Dice;