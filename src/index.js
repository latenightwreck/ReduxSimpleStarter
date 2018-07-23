import React from 'react';
import ReactDOM from 'react-dom';

// create a new component. this component should produce some HTML
const App = () => {
  return <div>Hello!</div>;
}

//Take this coponent's generated HTML and put it on the page (in DOM).
ReactDOM.render(<App />, document.querySelector('.container'));