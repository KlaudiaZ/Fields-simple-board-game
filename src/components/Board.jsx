import React, {Component, Fragment} from 'react';
import './styles/Board.css';
import Field from './Field';
import Interface from './Interface';

class Board extends Component {
    state = {
        currentField: 1
    }
    render () {
        let fields = [];
        for (let i = 1; i <= this.props.boardLength; i++) {
            fields.push(i);
        }

        return (
            <Fragment>
                <Interface />
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