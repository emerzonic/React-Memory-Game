import React, { Component } from 'react';
import '../App.css';

class Nav extends Component {
  render() {
    return (
        <div className="ui fluid three item menu fixed top">
              <li className="item App-nav">Memory Game</li>
              <li className="item App-nav">{this.props.nav.message}</li>
              <li className="item App-nav">Score: {this.props.nav.score} | Top Score: {this.props.nav.topScore}</li>
        </div>
    );
  }
}

export default Nav;