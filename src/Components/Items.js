import React, { Component } from 'react';
import img from './assets';
import '../App.css';


class Item1 extends Component {
  constructor(props){
    super(props);
    this.id = 1;
  
  this.onClick=()=>{
    this.props.checkItemGroup(this.id);
    this.props.shuffle(this.props.cards);
  };
}
  render() {
    return (
      <div className="card">
        <a className="image">
          <img src={img.img1} alt={this.props.name}  onClick={this.onClick}/>
        </a>
      </div> 
    );
  }
}

class Item2 extends Component {
  constructor(props){
    super(props)
    this.id = 2;
  
    this.onClick=()=>{
      this.props.checkItemGroup(this.id);
      this.props.shuffle(this.props.cards);
    }
  }
  render() {
    return (
      <div className="card">
        <a className="image">
          <img src={img.img2} alt={this.props.name}  onClick={this.onClick}/>
        </a>
      </div> 
    );
  }
}

class Item3 extends Component {
  constructor(props){
    super(props)
    this.id = 3
  
    this.onClick=()=>{
      this.props.checkItemGroup(this.id);
      this.props.shuffle(this.props.cards);
    }
  }
  render() {
    return (
      <div className="card">
        <a className="image">
          <img src={img.img3} alt={this.props.name}  onClick={this.onClick}/>
        </a>
      </div> 
    );
  }
}

class Item4 extends Component {
  constructor(props){
    super(props)
    this.id = 4
  
    this.onClick=()=>{
      this.props.checkItemGroup(this.id);
      this.props.shuffle(this.props.cards);
    }
  }


  render() {
    return (
      <div className="card">
        <a className="image">
          <img src={img.img4} alt={this.props.name}  onClick={this.onClick}/>
        </a>
      </div> 
    );
  }
}

class Item5 extends Component {
  constructor(props){
    super(props)
    this.id = 5
  
    this.onClick=()=>{
      this.props.checkItemGroup(this.id);
      this.props.shuffle(this.props.cards);
    }
  }
  render() {
    return (
      <div className="card">
        <a className="image">
          <img src={img.img5} alt={this.props.name}  onClick={this.onClick}/>
        </a>
      </div> 
    );
  }
}

class Item6 extends Component {
  constructor(props){
    super(props)
    this.id = 6
  
    this.onClick=()=>{
      this.props.checkItemGroup(this.id);
      this.props.shuffle(this.props.cards);
    }
  }
  render() {
    return (
      <div className="card">
        <a className="image">
          <img src={img.img6} alt={this.props.name}  onClick={this.onClick}/>
        </a>
      </div> 
    );
  }
}

class Item7 extends Component {
  constructor(props){
    super(props)
    this.id = 7
  
    this.onClick=()=>{
      this.props.checkItemGroup(this.id);
      this.props.shuffle(this.props.cards);
    }
  }
  render() {
    return (
      <div className="card">
        <a className="image">
          <img src={img.img7} alt={this.props.name}  onClick={this.onClick}/>
        </a>
      </div> 
    );
  }
}

class Item8 extends Component {
  constructor(props){
    super(props)
    this.id = 8
  
    this.onClick=()=>{
      this.props.checkItemGroup(this.id);
      this.props.shuffle(this.props.cards);
    }
  }
  render() {
    return (
      <div className="card">
        <a className="image">
          <img src={img.img8} alt={this.props.name}  onClick={this.onClick}/>
        </a>
      </div> 
    );
  }
}

class Item9 extends Component {
  constructor(props){
    super(props)
    this.id = 9
  
    this.onClick=()=>{
      this.props.checkItemGroup(this.id);
      this.props.shuffle(this.props.cards);
    }
  }
  render() {
    return (
      <div className="card">
        <a className="image">
          <img src={img.img9} alt={this.props.name}  onClick={this.onClick}/>
        </a>
      </div> 
    );
  }
}

class Item10 extends Component {
  constructor(props){
    super(props)
    this.id = 10
  
    this.onClick=()=>{
      this.props.checkItemGroup(this.id);
      this.props.shuffle(this.props.cards);
    }
  }
  render() {
    return (
      <div className="card">
        <a className="image">
          <img src={img.img10} alt={this.props.name}  onClick={this.onClick}/>
        </a>
      </div> 
    );
  }
}

class Item11 extends Component {
  constructor(props){
    super(props)
    this.id = 11
  
    this.onClick=()=>{
      this.props.checkItemGroup(this.id);
      this.props.shuffle(this.props.cards);
    }
  }
  render() {
    return (
      <div className="card">
        <a className="image">
          <img src={img.img11} alt={this.props.name}  onClick={this.onClick}/>
        </a>
      </div> 
    );
  }
}

class Item12 extends Component {
  constructor(props){
    super(props)
    this.id = 12
  
    this.onClick=()=>{
      this.props.checkItemGroup(this.id);
      this.props.shuffle(this.props.cards);
    }
  }
  render() {
    return (
      <div className="card">
        <a className="image">
          <img src={img.img12} alt={this.props.name}  onClick={this.onClick}/>
        </a>
      </div> 
    );
  }
}

export default {
  Item1:Item1,
  Item2:Item2,
  Item3:Item3,
  Item4:Item4,
  Item5:Item5,
  Item6:Item6,
  Item7:Item7,
  Item8:Item8,
  Item9:Item9,
  Item10:Item10,
  Item11:Item11,
  Item12:Item12
};

