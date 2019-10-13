import React, {
  Component
} from 'react';
import ImageData from './assets';

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

export default class Crystal extends Component {
  constructor(props) {
    super(props);

    this.onClick = (event) => {
      const imageId = event.target.getAttribute('data-id')
      this.props.checkAndUpdate(imageId);
      this.setState({
        order: ShuffleCrystals(this.state.order)
      });
    };
    
    this.images = [];

    this.getImages = (imageData) => {
      for (const key of Object.keys(imageData)) {
        this.images.push(imageData[key]);
      }
    }

    this.getImages(ImageData);
    this.state = {};
    this.state.order = Object.keys(this.images);
  }
  render() {
    let Crystals = this.state.order.map((i) => {
      let image = this.images[i];
      return <div className="card" key={i}>
                <a className="image">
                   <img 
                    src={image} 
                    data-id={i} 
                    alt={this.props.name} 
                    onClick={this.onClick}/>
                </a>
              </div> 
    });
    return (
      Crystals
    );
  }
}
