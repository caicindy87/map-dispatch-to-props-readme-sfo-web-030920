import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
// importing action creator from separate file
import { addItem } from "./actions/items";

class App extends Component {
  handleOnClick() {
    // don't have to write this.props.dispatch(addItem()) = default dispatch behavior
    this.props.addItem();
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>Click</button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

// takes in dispatch as an argument
// mapDispatchToProps returns an object with a function as a value
// will map the addItem key/value pair to App component's props
// then in handleOnClick, the function we saved as a value is called, not the addItem() action creator
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: () => dispatch(addItem()),
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// this is the same thing as if we passed in mapDispatchToProps
export default connect(mapStateToProps, { addItem })(App);
