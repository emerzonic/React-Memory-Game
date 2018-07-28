import React, { Component } from 'react';
import Items from './Items';
import '../App.css';

class Cards extends Component {
  constructor(props){
    super(props);

this.cards = [Items.Item1, Items.Item2, Items.Item3, Items.Item4, Items.Item5, Items.Item6,
              Items.Item7, Items.Item8, Items.Item9, Items.Item10, Items.Item11, Items.Item12];

this.shuffle = (array) => {
  let counter = array.length;
  while (counter > 0) {
      let i = Math.floor(Math.random() * counter);
      counter--;
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[i];
      array[i] = temp;
  }
  return array;
};
  }
  render() {
    let  CardsGroup = this.cards.map((Card, i)=> <Card key={i} shuffle={this.shuffle} cards={this.cards} checkItemGroup={this.props.checkItemGroup}/>);
    return (
        <div className="ui grid">
          <div className="sixteen wide mobile eight wide tablet eight wide computer centered column shake">
            <div className="ui raised four cards"> 
              {CardsGroup}
            </div> 
          </div>
        </div>
    ); 
  }
}


export default Cards;



