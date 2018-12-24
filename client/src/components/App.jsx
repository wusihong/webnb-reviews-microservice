import React from 'react';
import Reviews from './Reviews.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.get = this.get.bind(this);
  }
  
  componentDidMount() {
    this.get();
  }

  get() {
    $.ajax({
      url: 'http://localhost:3000/rooms/2/reviews',
      method: 'GET',
      success: (data) => {
        console.log('success', data)
      },
    })
  }
  
  render() {
    return (
      <Reviews />
    )
  }
}

// window.location.href 

export default App;




