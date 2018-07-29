import React from 'react';
import '../App.css';

const Nav = (props) => {
  return (
        <div className="ui three item menu fixed top">
            <li className="item App-nav">Memory Game</li>
            <li className="item App-nav"> {props.nav.message}</li>
            <li className="item App-nav">Score: {props.nav.score} | Top Score: {props.nav.topScore}</li>
        </div>
    );
  }

  export default Nav;