import React, { PropTypes } from 'react';
import {
  Input,
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

WorkEditItem.propTypes = {
  id: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
};

export default WorkEditItem;
