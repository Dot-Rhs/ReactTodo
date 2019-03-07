import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const card = name => (
  <div className="card">
    <p>{name}</p>
  </div>
);

class NewItem extends Component {
  state = {
    inputValue: "xyz"
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={evt => this.setState({ inputValue: evt.target.value })}
        />
        <button onClick={() => this.props.addItem(this.state.inputValue)}>
          Add New Item
        </button>
      </div>
    );
  }
}

class App extends Component {
  state = {
    todoItems: ["first ToDo Item", "Second ToDo Item"]
  };

  addItem = newItem => {
    this.setState({
      todoItems: [...this.state.todoItems, newItem]
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <NewItem addItem={this.addItem} />
        {this.state.todoItems.map(card)}
      </div>
    );
  }
}

export default App;
