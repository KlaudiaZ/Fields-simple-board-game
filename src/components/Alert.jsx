import React from 'react';
import './styles/Alert.css';

const Alert = ({mode, onCloseClick, toggleBoard}) => {
    return (
        <div className="alertBackground">
        <div className="alert">
            {mode === 'about' && 
                <div>
                    {"Author: Klaudia Zając"}
                    <br />
                    <br />
                    {`Instructions:
                    Press "Play" to begin the game. Press "Throw" to roll the die and move forward by the number you rolled.
                    You win the game upon getting to the last field. You lose when you step on the field number 12.
                    Stepping on the field 19 will transport you to the field 11, be careful!
                    Enjoy!`}
                </div>}
            {mode === 'gameWon' &&
                <div>
                    {"Congratulations! You Win! :)"}
                </div>}
            {mode === 'gameLost' &&
                <div>
                    {"Sorry! You lose... :("}
                </div>}
            <button className="navigation" onClick={() => {
                if (mode === 'about') {
                    onCloseClick();
                } else {
                    toggleBoard();
                }
            }}>{"Close"}</button>
        </div>
        </div>
    );
}

export default Alert;