import React, {
  Component
} from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import './App.css';

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    shake: false,
    message: 'Click on an image to begin.'
  };

  trackCrystalIds = [];

  checkAndUpdate = (crystalId) => {
    if (this.trackCrystalIds.includes(crystalId)) {
      this.resetState();
      this.trackCrystalIds = [];
    } else {
      this.updateScore();
      this.trackCrystalIds.push(crystalId);
    }
    this.checkGameStatus();
  };

  resetState = () => {
    this.setState({
      score: 0,
      message: "😜",
      shake: true
    });
  };

  updateScore = () => {
    this.setState({
      score: this.state.score + 1,
      message: "Yes!",
      shake: false
    });
    this.updateTopscore();
  };

  updateTopscore = () => {
    if (this.state.score >= this.state.topScore) {
      this.setState({
        topScore: this.state.score + 1,
      });
    }
  };

  checkGameStatus() {
    if (this.trackCrystalIds.length === 12) {
      this.setState({
        message: "You Win!",
      });
      this.trackCrystalIds = [];
    }
  }

  render() {
    const shakeClass = this.state.shake ? 'shake': '';
    return (
      <div>
        <Nav nav={this.state}/>
        <Header/>
        <Cards 
          checkAndUpdate={this.checkAndUpdate} 
          className={`sixteen wide mobile eight wide tablet eight wide computer centered column ${shakeClass}`}/>
        <Footer/>
      </div>
    );
  }
}

export default App;