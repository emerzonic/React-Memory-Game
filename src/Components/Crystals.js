import React, {
  Component
} from 'react';
import Img from './assets';


//This function takes the images array, shuffle and return a new shuffled array
const ShuffleCrystals = (array) => {
  let counter = array.length;
  while (counter > 0) {
    let i = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[i];
    array[i] = temp;
  }
  return array;
};

//Crystal Component 
export default class Crystal extends Component {
  constructor(props) {
    super(props);

    //Onclick event handler for the image
    this.onClick = (event) => {
      //Create a veriable to hold the image data-id attribute
      let imgId = event.target.getAttribute('data-id')
      //pass the image id back to the App parent component
      this.props.checkAndUpdate(imgId);
      //Set a new state for the images in the array
      this.setState({
        order: ShuffleCrystals(this.state.order)
      });
    };
    
    this.images = [];
    //This method  takes the "Img" object above and extra and 
    //push all the values to the images property array 
    this.getImages = (obj) => {
      for (const key of Object.keys(obj)) {
        this.images.push(obj[key]);
      }
    }

    this.getImages(Img);
    this.state = {};
    this.state.order = Object.keys(this.images);

  }
  render() {
    let Crystals = this.state.order.map((i) => {
      let img = this.images[i];
      return <div className="card" key={i}>
                <a className="image">
                   <img src={img} data-id={i} alt={this.props.name} onClick={this.onClick}/>
                </a>
              </div> 
    });
    return (
      Crystals
    );
  }
}
