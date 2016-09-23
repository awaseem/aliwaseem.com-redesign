import React from 'react';
import {
  Input,
  Button,
} from 'jam-components';

class WorkEditItem extends React.Component {
  constructor(props) {
    super(props);
    this.updates = { company: '', url: '', position: '', timeline: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const newUpdate = this.updates;
    newUpdate[e.target.name] = e.target.value;
    this.props.update(this.props.id, newUpdate);
  }

  render() {
    return (
      <div>
        <hr />
        <Input change={this.handleChange} name="company" label="Company" type="text" />
        <Input change={this.handleChange} name="url" label="Url" type="text" />
        <Input change={this.handleChange} name="position"label="Position" type="text" />
        <Input change={this.handleChange} name="timeline" label="Timeline" type="text" />
      </div>
    );
  }
}

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
