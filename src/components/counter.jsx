import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: this.props.value
  };

  // constructor(props) {
  //   super(props);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   this.handleDecrement = this.handleDecrement.bind(this);
  // }

  render() {
    let product = { id: 100 };
    //    console.log('props:', this.props);

    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Decrement
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log('Increment Clicked', this.state.count);
    //    console.log('id ', product.id);
  };
  // handleDecrement = () => {
  //   if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  //   console.log('Decrement Clicked', this.state.count);
  // };

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}
export default Counter;
