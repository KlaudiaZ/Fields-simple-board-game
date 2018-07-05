import React, {Component, Fragment} from 'react';
import './styles/Board.css';
import Alert from './Alert';
import Field from './Field';
import Interface from './Interface';

class Board extends Component {
    state = {
        currentField: 1,
        diceStatus: "Ready to throw!",
        gameOver: "",
        sum: 0,
        throwCount: 0
    }

    handleThrow = (min, max) => {
        const result = Math.round(Math.random() * (max - min) + min);
        this.setState((state) => {
            return {
                diceStatus: result,
                sum: state.sum + result,
                throwCount: state.throwCount + 1
            }
        });
        this.changeCurrentField(result);
    }

    changeCurrentField = (result) => {
        this.setState((state) => {
            let active = state.currentField;

            active = active + result;

            if (active > this.props.boardLength) {
                active = 2 * this.props.boardLength - active;
            }

            switch (active) {     // add another case to create more special fields
                case 20:
                    return {
                        currentField: 20,
                        gameOver: "won"
                    }
                case 19:
                    return {
                        currentField: 11
                    }
                case 12:
                    return {
                        currentField: 12,
                        gameOver: "lost"
                    }
                default: {
                    return {
                        currentField: active
                    }
                }
            }
        });
    }

    render () {
        let fields = [];
        for (let i = 1; i <= this.props.boardLength; i++) {
            fields.push(i);
        }

        const stats = {
            sum: this.state.sum,
            throwCount: this.state.throwCount
        }

        return (
            <Fragment>
                <Interface onThrow={this.handleThrow} diceStatus={this.state.diceStatus} />
                <div className="board">
                    {fields.map((field, index) => {
                        return <Field key={index + 1} selected={this.state.currentField === (index + 1) ? true : false}>{field}</Field>
                    })}
                </div>
                {this.state.gameOver !== "" &&
                    <Alert 
                        mode={this.state.gameOver === "won" ? "gameWon": "gameLost"}  
                        toggleBoard={this.props.onGameOver}
                        stats={stats}
                    />}
            </Fragment>
        );
    }
}

export default Board;