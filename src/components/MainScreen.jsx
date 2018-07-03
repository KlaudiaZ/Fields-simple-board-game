import React from 'react';

const MainScreen = (props) => {
    return (
        <div>
            <button className="navigation" onClick={() => {props.onPlayClick()}}>{"Play"}</button>
            <button className="navigation" onClick={() => {props.onAboutClick()}}>{"About"}</button>
        </div>
    );
}

export default MainScreen;