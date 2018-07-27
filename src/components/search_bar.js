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
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value) } 
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;