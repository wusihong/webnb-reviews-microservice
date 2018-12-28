import React from 'react';
import BlendedStars from './BlendedStars.jsx';
import SearchReviews from './SearchReviews.jsx';
import Stars from './Stars.jsx';
import Reviews from './Reviews.jsx';
import PageBar from './PageBar.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hostDetails: this.props.hostDetails,
      reviews: this.props.reviews,
      beginningIndexForVisibleReviews: 0,
      visibleReviews: this.props.reviews.slice(0, 7),
      stars: this.props.stars,
    }
    this.toggleVisibleReviews = this.toggleVisibleReviews.bind(this);
  }

  toggleVisibleReviews(newBeginningIndex) {
    console.log(newBeginningIndex)
    console.log(this.state.reviews.length)
    if(newBeginningIndex >= 0  && newBeginningIndex < this.state.reviews.length) {
      const newEndIndex = newBeginningIndex + 7;
      const newBeginningIndexForVisibleReviews = newBeginningIndex;

      this.setState({
        beginningIndexForVisibleReviews: newBeginningIndexForVisibleReviews,
        visibleReviews: this.props.reviews.slice(newBeginningIndex, newEndIndex),
      })
    }
  }

  render() {
    return (
      <div>
        <BlendedStars stars={this.state.stars} reviews={this.state.reviews}/>
        <SearchReviews />
        <Stars stars={this.state.stars} />
        <Reviews hostDetails={this.state.hostDetails} visibleReviews={this.state.visibleReviews} stars={this.state.stars} />
        <PageBar beginningIndexForVisibleReviews={this.state.beginningIndexForVisibleReviews} toggleVisibleReviews={this.toggleVisibleReviews} reviews={this.state.reviews} />
      </div>
    )
  }
}

// window.location.href 
// props type

// page bar basic func
// page bar complex func
// read more functionality 
// XXXX host response 
// foreign language functionality 
// search review functionality 
// revised dummyDataGenerator to have weighting
// es6 variable naming and functionality

export default App;




