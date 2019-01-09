import React, { Component } from 'react';
import Counter from './counter';

const util = require('util');

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 10, function: 'product 1' },
      { id: 2, value: 0, function: 'product 2' },
      { id: 3, value: 0, function: 'product 3' },
      { id: 4, value: 0, function: 'product 4' }
    ]
  };

  handleDelete = counterId => {
    const staticObject = {
      rows: [
        { id: 1, test: 'row1' },
        { id: 2, test: 'row2' },
        { id: 3, test: 'row3' }
      ]
    };
    let dynamicObject = staticObject.filter(therow => therow.id > 3);
    console.log('Delete handler, counterId', counterId);
    const newObj = [
      ...this.state.counters.filter(counter => this.state.counters.id !== 4)
    ];
    console.log('..newObj', util.inspect(newObj));
    this.setState(newObj);
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            selected="true"
          />
        ))}
      </div>
    );
  }
}

export default Counters;
