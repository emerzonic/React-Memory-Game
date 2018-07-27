import React, {
  Component
} from 'react';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      topScore: 0,
      message: 'Click on an image to begin'
    };
    this.trackGroups = [];
    this.tracker = 0;

    this.checkItemGroup = (cardId) => {
      if (this.trackGroups.includes(cardId)) {
        this.resetState();
        this.trackGroups = [];
      } else {
        this.updateScore();
        this.trackGroups.push(cardId);
      }
    };


    this.updateScore = () => {
      this.setState({
        score: this.state.score + 1,
        message: "You got it!"
      })
      this.updateTopscore();
    }

    this.updateTopscore = () => {
      if(this.state.score >= this.state.topScore){
      this.setState({
        topScore: this.state.score + 1,
      })
      }
    }

    this.resetState = () => {
      this.setState({
        score: 0,
        message: "You missed it!"
      })
    }
}

  render() {
    return (
      <div>
        <Nav nav={this.state}/>
        <Header/>
        <Cards checkItemGroup={this.checkItemGroup}/>
        <Footer/>
      </div>
    );
  }
}

export default App;