import React, { Component, Fragment } from 'react';
import './App.css';
import Alert from './components/Alert';
import Board from './components/Board';
import MainScreen from './components/MainScreen';

class App extends Component {
  state = {
    displayBoard: false,
    displayAbout: false
  }

  toggleBoard = () => {
    this.setState((state) => {
      return {
        displayBoard: !state.displayBoard
      }
    });
  }

  toggleAbout = () => {
    this.setState((state) => {
      return {
        displayAbout: !state.displayAbout
      }
    });
  }

  render() {

    const boardLength = 20;

    return (
      <Fragment>
      {this.state.displayAbout && 
        <Alert 
          onCloseClick={this.toggleAbout} 
          mode={"about"}
          />}
      <div className="App">
        {!this.state.displayBoard && 
          <MainScreen 
            onPlayClick={this.toggleBoard} 
            onAboutClick={this.toggleAbout} 
          />}
        {this.state.displayBoard && 
          <Board 
            boardLength={boardLength} 
            onGameOver={this.toggleBoard} />}  
      </div>
      </Fragment>
    );
  }
}

export default App;
