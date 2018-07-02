import React, {Component, Fragment} from 'react';
import './styles/Board.css';
import Field from './Field';
import Interface from './Interface';

class Board extends Component {
    state = {
        currentField: 1
    }

    changeCurrentField = (result) => {
        this.setState((state) => {
            /*
            - assign state.currentField to a variable
            - rewrite 'if's as switch-case
            */
            state.currentField = state.currentField + result;
            if (state.currentField === 20) {
                console.log('you win! :)');
            }
            if (state.currentField === 12) {
                console.log('you lose :(');
            }
            if (state.currentField > 20) {
                state.currentField = 20 - (state.currentField - 20);
            }
            if (state.currentField === 19) {
                state.currentField = 11;
            }
            return {
                currentField: state.currentField
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
                <Interface onThrow={this.changeCurrentField} />
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