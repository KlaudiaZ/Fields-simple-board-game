import React, {Component} from 'react';
import './styles/Interface.css';
import Dice from './Dice';

class Interface extends Component {
    
    handleThrowClick = () => {
        const result = Math.random()
        return result;
    }

    render () {

        return (
            <div className="interface">
                <Dice onThrowClick={this.handleThrowClick} />
            </div>
        );
    }
}

export default Interface;