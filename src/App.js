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
      shake: true, 
      message: 'Click on an image to begin'
    };
    this.trackCards = [];

    this.checkItemGroup = (cardId) => {
      if (this.trackCards.includes(cardId)) {
        this.resetState();
        this.trackCards = [];
      } else {
        this.updateScore();
        this.trackCards.push(cardId);
      }
    };


    this.updateScore = () => {
      this.setState({
        score: this.state.score + 1,
        message: "You got it!"
      });
      this.updateTopscore();
    };

    this.updateTopscore = () => {
      if(this.state.score >= this.state.topScore){
      this.setState({
        topScore: this.state.score + 1,
      });
      }
    };

    this.resetState = () => {
      this.setState({
        score: 0,
        message: "😜"
      });
    };

    this.shake = ()=>{
        this.setState({shake: true});
    };
}

  render() {
    return (
      <div>
        <Nav nav={this.state}/>
        <Header/>
        <Cards checkItemGroup={this.checkItemGroup} className={this.state.shake ? 'shake': null} />
        <Footer/>
      </div>
    );
  }
}

export default App;