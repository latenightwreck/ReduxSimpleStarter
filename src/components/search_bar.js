import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // only change state this way inside of the constructor
    this.state = { term: ''};
  }

  //method to render this class to DOM
  render() {
    //Set state using this.setState(Object)
    return (
      <div>
        <input 
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value }) } 
        />
      </div>
    );
  }
}

export default SearchBar;