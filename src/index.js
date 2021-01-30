
// you need these import statements in scope to write JSX / react code 
import React from 'react'; 
import ReactDOM from 'react-dom';
import App from './App'; // <--- we are importing the App.js here 

// the react dom render function takes in the App.js file, and injects it into the root div in the index.html 
ReactDOM.render(<App />, document.getElementById('root'));


