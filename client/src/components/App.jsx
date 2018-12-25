import React from 'react';
import Reviews from './Reviews.jsx';
import Stars from './Stars.jsx';
import PageBar from './PageBar.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      visibleReviews: this.props.reviews.slice(0, 7),
      stars: this.props.stars,
    }
  }
  
  render() {
    return (
      <div>
        <Stars stars={this.state.stars} />
        <Reviews visibleReviews={this.state.visibleReviews} stars={this.state.stars} />
        <PageBar reviews={this.state.reviews} />
      </div>
    )
  }
}

// window.location.href 
// props type

export default App;




