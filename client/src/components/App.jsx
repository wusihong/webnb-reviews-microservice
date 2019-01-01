import React from 'react';
import BlendedStars from './BlendedStars.jsx';
import SearchReviews from './SearchReviews.jsx';
import Stars from './Stars.jsx';
import Reviews from './Reviews.jsx';
import PageBar from './PageBar.jsx';
import FilterMessage from './FilterMessage.jsx';
import { AppContainer, FlexContainer_Row_SpaceBetween } from './Styles.js'; 

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hostInformation: {},
      allReviews: [],
      isFiltered: false,
      currentSearchTerm: '',
      visibleReviews: [],
      beginningIndexForCurrentPageReviews: 0,
      currentPageReviews: [],
      stars: {},
    }
    this.getFilteredReviews = this.getFilteredReviews.bind(this);
    this.backToAllReviews = this.backToAllReviews.bind(this);
    this.toggleCurrentPageReviews = this.toggleCurrentPageReviews.bind(this);
  }

  componentDidMount() {
    this.getAllReviews();
    this.getHostInformation();
    this.getStars();
  }

  getAllReviews() {
    const roomId = window.location.pathname.slice(7, -1);
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/rooms/${roomId}/reviews`,
      success: (data) => {
        this.setState({
          allReviews: data,
          isFiltered: false,
          currentSearchTerm: '',
          visibleReviews: data,
          beginningIndexForCurrentPageReviews: 0,
          currentPageReviews: data.slice(0,7),
        })
      }
    })
  }

  getHostInformation() {
    const roomId = window.location.pathname.slice(7, -1);
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/rooms/${roomId}/hostDetails`,
      success: (data) => {
        this.setState({
          hostInformation: data[0],
        })
      }
    })
  }

  getStars() {
    const roomId = window.location.pathname.slice(7, -1);
    $.ajax({
      method: 'GET',
      url: `http://localhost:3000/rooms/${roomId}/stars`,
      success: (data) => {
        this.setState({
          stars: data[0],
        })
      }
    })
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

  backToAllReviews() {
    this.setState({
      isFiltered: false,
      visibleReviews: this.state.allReviews,
      beginningIndexForCurrentPageReviews: 0,
      currentPageReview: this.state.allReviews.slice(0, 7)
    })
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

    const allReviewsView = (
      <AppContainer>
        <FlexContainer_Row_SpaceBetween>
          <BlendedStars stars={this.state.stars} allReviews={this.state.allReviews}/>
          <SearchReviews getFilteredReviews={this.getFilteredReviews} />
        </FlexContainer_Row_SpaceBetween>
        <Stars stars={this.state.stars} />
        <Reviews hostInformation={this.state.hostInformation} currentPageReviews={this.state.currentPageReviews} stars={this.state.stars} />
        <PageBar beginningIndexForCurrentPageReviews={this.state.beginningIndexForCurrentPageReviews} toggleCurrentPageReviews={this.toggleCurrentPageReviews} visibleReviews={this.state.visibleReviews} />
      </AppContainer>
    )

    const filteredView = (
      <AppContainer>
        <FlexContainer_Row_SpaceBetween>
          <BlendedStars stars={this.state.stars} allReviews={this.state.allReviews}/>
          <SearchReviews getFilteredReviews={this.getFilteredReviews} />
        </FlexContainer_Row_SpaceBetween>
        <FilterMessage backToAllReviews={this.backToAllReviews} currentSearchTerm={this.state.currentSearchTerm} visibleReviews={this.state.visibleReviews} />
        <Reviews hostInformation={this.state.hostInformation} currentPageReviews={this.state.currentPageReviews} stars={this.state.stars} />
        <PageBar beginningIndexForCurrentPageReviews={this.state.beginningIndexForCurrentPageReviews} toggleCurrentPageReviews={this.toggleCurrentPageReviews} visibleReviews={this.state.visibleReviews} />
      </AppContainer>
    )

    return (
      <div>
        {this.state.isFiltered ? filteredView : allReviewsView}
      </div>
    )
  }

}

// Pagebar styling 

// TODO LIST
// foreign language functionality 
// page bar complex func
// read more functionality 
// revised dummyDataGenerator to have weighting
// es6 variable naming and functionality

export default App;




