import React from 'react';

const About = (props) => {
    return (
        <div>
            {'About'}
            <button className="navigation" onClick={() => {props.onCloseClick()}}>{"Close"}</button>
        </div>
    );
}

export default About;