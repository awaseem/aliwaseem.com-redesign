import React, { PropTypes } from 'react';
import WorkEditItem from './workEditItem';
import {
  Button,
} from 'jam-components';

class WorkEdit extends React.Component {
  constructor(props) {
    super(props);
    this.workItems = [];
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
    if (this.workItems[id] === undefined) {
      this.workItems.push(updates);
    } else {
      this.workItems[id] = updates;
    }
  }

  render() {
    return (
      <div>
        <Button color="red" click={this.add}>Add</Button>
        {this.state.items.map((value, i) =>
          <WorkEditItem
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


export default WorkEdit;
