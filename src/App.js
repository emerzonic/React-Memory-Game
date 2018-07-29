import React, {
  Component
} from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import './App.css';

//App component
class App extends Component {
  constructor(props) {
    super(props);
    //Set the initial state
    this.state = {
      score: 0,
      topScore: 0,
      shake: false,
      message: 'Click on an image to begin'
    };
    //An array to hold the crystal ids
    this.trackCrystalIds = [];
    //A method that check if id is already in array and reset the state or update the scores 
    this.checkAndUpdate = (crystalId) => {
      if (this.trackCrystalIds.includes(crystalId)) {
        this.resetState();
        this.trackCrystalIds = [];
      } else {
        this.updateScore();
        this.trackCrystalIds.push(crystalId);
      }
      if (this.trackCrystalIds.length === 3) {
        this.setState({
          message: "You Win!",
        });
        this.trackCrystalIds = [];
      }
    };

    //This method updates the score when a new crystal is clicked
    this.updateScore = () => {
      this.setState({
        score: this.state.score + 1,
        message: "Yes!",
        shake: false
      });
      this.updateTopscore();
    };

    //This method updates the topscore when a new crystal is clicked
    this.updateTopscore = () => {
      if (this.state.score >= this.state.topScore) {
        this.setState({
          topScore: this.state.score + 1,
        });
      }
    };

    //This method resets the score when a previous crystal is clicked
    this.resetState = () => {
      this.setState({
        score: 0,
        message: "😜",
        shake: true
      });
    };
  }

  render() {
    return (
      <div>
        <Nav nav={this.state}/>
        <Header/>
        <Cards checkAndUpdate={this.checkAndUpdate} className={this.state.shake? "sixteen wide mobile eight wide tablet eight wide computer centered column shake":"sixteen wide mobile eight wide tablet eight wide computer centered column"}/>
        <Footer/>
      </div>
    );
  }
}

export default App;