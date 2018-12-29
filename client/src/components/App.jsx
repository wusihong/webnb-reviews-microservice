import React from 'react';
import BlendedStars from './BlendedStars.jsx';
import SearchReviews from './SearchReviews.jsx';
import Stars from './Stars.jsx';
import Reviews from './Reviews.jsx';
import PageBar from './PageBar.jsx';
import FilterMessage from './FilterMessage.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hostInformation: this.props.hostInformation,
      allReviews: this.props.reviews,
      isFiltered: false,
      currentSearchTerm: '',
      visibleReviews: this.props.reviews,
      beginningIndexForCurrentPageReviews: 0,
      currentPageReviews: this.props.reviews.slice(0, 7),
      stars: this.props.stars,
    }
    this.getFilteredReviews = this.getFilteredReviews.bind(this);
    this.toggleReviewsFilter = this.toggleReviewsFilter.bind(this);
    this.toggleCurrentPageReviews = this.toggleCurrentPageReviews.bind(this);
  }

  getFilteredReviews(searchTerm) {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/rooms/${this.state.hostInformation.room_id}/query/?queryTerm=${searchTerm}`,
      success: (data) => {
        this.setState({
          isFiltered: true,
          currentSearchTerm: searchTerm,
          visibleReviews: data,
          beginningIndexForCurrentPageReviews: 0,
          currentPageReviews: data.slice(0, 7),
        })
      }
    })
  }

  toggleReviewsFilter() {
    this.setState({
      isFiltered: false,
      visibleReviews: this.state.allReviews,
      beginningIndexForCurrentPageReviews: 0,
      currentPageReview: this.state.allReviews.slice(0, 7)
    })
    // also need to clear search input field
  }

  toggleCurrentPageReviews(newBeginningIndex) {
    if(newBeginningIndex >= 0  && newBeginningIndex < this.state.visibleReviews.length) {
      const newEndIndex = newBeginningIndex + 7;
      const newBeginningIndexForCurrentPageReviews = newBeginningIndex;

      this.setState({
        beginningIndexForCurrentPageReviews: newBeginningIndexForCurrentPageReviews,
        currentPageReviews: this.state.visibleReviews.slice(newBeginningIndex, newEndIndex),
      })
    }
  }

  render() {

    if(!this.state.isFiltered) {
      return (
        <div>
          <BlendedStars stars={this.state.stars} allReviews={this.state.allReviews}/>
          <SearchReviews getFilteredReviews={this.getFilteredReviews} />
          <Stars stars={this.state.stars} />
          <Reviews hostInformation={this.state.hostInformation} currentPageReviews={this.state.currentPageReviews} stars={this.state.stars} />
          <PageBar beginningIndexForCurrentPageReviews={this.state.beginningIndexForCurrentPageReviews} toggleCurrentPageReviews={this.toggleCurrentPageReviews} visibleReviews={this.state.visibleReviews} />
        </div>
      ) 
    }

    if(this.state.isFiltered) {
      return (
        <div>
          <BlendedStars stars={this.state.stars} allReviews={this.state.allReviews}/>
          <FilterMessage toggleReviewsFilter={this.toggleReviewsFilter} currentSearchTerm={this.state.currentSearchTerm} visibleReviews={this.state.visibleReviews} />
          <SearchReviews getFilteredReviews={this.getFilteredReviews} />
          <Reviews hostInformation={this.state.hostInformation} currentPageReviews={this.state.currentPageReviews} stars={this.state.stars} />
          <PageBar beginningIndexForCurrentPageReviews={this.state.beginningIndexForCurrentPageReviews} toggleCurrentPageReviews={this.toggleCurrentPageReviews} visibleReviews={this.state.visibleReviews} />
        </div>
      ) 
    }

  }
}


// XX search review functionality 
// replace dummy data with requests to back-end
  // window.location.href 
  // props type

// TODO LIST
// foreign language functionality 
// page bar complex func
// read more functionality 
// revised dummyDataGenerator to have weighting
// es6 variable naming and functionality

export default App;




