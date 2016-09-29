import React, { PropTypes } from 'react';
import PortfolioEditItem from './portfolioEditItem';
import {
  Button,
} from 'jam-components';

class PortfolioEdit extends React.Component {
  constructor(props) {
    super(props);
    this.portfolioItems = [];
    this.state = { items: props.items || [{}] };
    this.add = this.add.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  add() {
    this.setState({
      items: [...this.state.items, {}],
    });
  }

  updateItem(id, updates) {
    if (this.portfolioItems[id] === undefined) {
      this.portfolioItems.push(updates);
    } else {
      this.portfolioItems[id] = updates;
    }
  }

  render() {
    return (
      <div>
        <Button color="red" click={this.add}>Add</Button>
        {this.state.items.map((value, i) =>
          <PortfolioEditItem
            key={i}
            id={i}
            defaults={value}
            update={this.updateItem}
            handle={this.handleChange}
          />
        )}
        <Button color="green">Save</Button>
      </div>
    );
  }
}


export default PortfolioEdit;
