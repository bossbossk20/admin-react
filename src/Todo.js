import React, { Component, PropTypes } from 'react';

export class Todo extends Component {

  static propTypes = {
    buttonColor: PropTypes.string.isRequired,
  }

  state = {
    inputText: '',
    listItem: []
  }

  handleChangeText = (event) => {
    this.setState({inputText: event.target.value});
  }

  submitList = () => {
    this.setState({
      listItem: this.state.listItem.concat([this.state.inputText]),
      inputText: ''
    })
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.submitList();
    }
  }

  deleteListAtIndex = (index) => {
    const resule = this.state.listItem;
    resule.splice(index, 1);
    this.setState({
        listItem: resule
    });
  }

  render() {
    return (
      <div>
          <div>
              <h1>To-do-list</h1>
              <div>
                  <input
                         type="text"
                         onChange={this.handleChangeText}
                         value={this.state.inputText}
                         placeholder="what do you want to do?"
                         onKeyPress={this.handleKeyPress}/>
                  <button
                          onClick={this.submitList}
                          style={{background: this.props.buttonColor}}>Add</button>
              </div>

              <div>
                {this.state.listItem.map((value, index) => {
                    return (
                      <div key={index + value}>
                          <div>{value}</div>
                          <div onClick={this.deleteListAtIndex.bind(this, index)}>x</div>
                      </div>
                    )
                })}
              </div>
          </div>
      </div>
    );
  }
}
