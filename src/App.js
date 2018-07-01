import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Board from './components/Board';
import Welcome from './components/Welcome';

class App extends Component {
  state = {
    displayed: 'welcome', // welcome/board
    displayAbout: false
  }

  handlePlayClick = () => {
    this.setState(() => {
      return {
        displayed: 'board'
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
    return (
      <div className="App">
        {this.state.displayed === 'welcome' && 
          <Welcome 
            onPlayClick={this.handlePlayClick} 
            onAboutClick={this.toggleAbout} 
          />}
        {this.state.displayed === 'board' && <Board boardLength={20} />}
        {this.state.displayAbout && <About onCloseClick={this.toggleAbout} />}
      </div>
    );
  }
}

export default App;
