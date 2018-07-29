import React from 'react';
import '../App.css';

const Header = () => {
    return (
<div className="ui grid">
  <div className="sixteen wide centered column App-header">
      <div className="headerContent">
          <h1 className="App-title">Memory Game!</h1>
          <h3 className="App-intro">Click each crystal to earn points, but don't click on any more than once!</h3>
      </div>
  </div>
</div>
    );
  }


export default Header;