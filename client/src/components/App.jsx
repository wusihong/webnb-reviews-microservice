import React from 'react';
import Reviews from './Reviews.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      stars: this.props.stars,
    }
  }
  
  render() {
    return (
      <Reviews reviews={this.state.reviews} stars={this.state.stars} />
    )
  }
}

// window.location.href 
// props type

export default App;




