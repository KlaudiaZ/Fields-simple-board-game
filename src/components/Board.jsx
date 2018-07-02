import React, {Component, Fragment} from 'react';
import './styles/Board.css';
import Field from './Field';
import Interface from './Interface';

class Board extends Component {
    state = {
        currentField: 1,
        diceStatus: "Ready to throw!"
    }

    handleThrow = (min, max) => {
        const result = Math.round(Math.random() * (max - min) + min);
        this.setState(() => {
            return {
                diceStatus: result
            }
        });
        this.changeCurrentField(result);
    }

    changeCurrentField = (result) => {
        this.setState((state) => {
            let active = state.currentField;

            active = active + result;

            switch (true) {     //add another case to create more special fields
                case active > 20:
                    active = 20 - (active - 20);
                    break;
                case active === 20:
                    console.log('you win! :)');
                    break;
                case active === 19:
                    active = 11;
                    break;
                case active === 12:
                    console.log('you lose :(');
                    break;                
            }
            return {
                currentField: active
            }
        });
    }

    render () {
        let fields = [];
        for (let i = 1; i <= this.props.boardLength; i++) {
            fields.push(i);
        }

        return (
            <Fragment>
                <Interface onThrow={this.handleThrow} diceStatus={this.state.diceStatus} />
                <div className="board">
                    {fields.map((field, index) => {
                        return <Field key={index + 1} selected={this.state.currentField === (index + 1) ? true : false}>{field}</Field>
                    })}
                </div>
            </Fragment>
        );
    }
}

export default Board;