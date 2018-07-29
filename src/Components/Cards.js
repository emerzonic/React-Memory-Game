import React from 'react';
import Crystals from './Crystals';

//Card component
const Cards = (props) => {
    return (
        <div className="ui grid">
          <div className={props.className}>
            <div className="ui raised four cards"> 
              <Crystals {...props}/>
            </div> 
          </div>
        </div>
    ); 
  }

  export default Cards;




