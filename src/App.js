import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

//function that specifies what part of state we want
const mapStateToProps = (state) => {
  return { items: state.items };
}

//connect watches changes in state, returns slice of state defined in above function 
//to the component specified (App)
export default connect(mapStateToProps)(App);
