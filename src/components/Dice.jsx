import React from 'react';

const Dice = ({onThrowClick}) => {

     
    
    return (
        <div>
            <button onClick={() => {onThrowClick(1, 6)}}>{"Throw"}</button>
            <div>
                
            </div>
        </div>
    );
}

export default Dice;