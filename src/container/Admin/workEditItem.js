import React, { PropTypes } from 'react';
import {
  Input,
} from 'jam-components';

class WorkEditItem extends React.Component {
  constructor(props) {
    super(props);
    this.updates = {
      company: props.defaults.company,
      url: props.defaults.url,
      position: props.defaults.position,
      timeline: props.defaults.timeline,
    };
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
        <Input
          change={this.handleChange}
          value={this.updates.company}
          name="company" label="Company"
          type="text"
        />
        <Input
          change={this.handleChange}
          value={this.updates.url}
          name="url" label="Url"
          type="text"
        />
        <Input
          change={this.handleChange}
          value={this.updates.position}
          name="position"label="Position"
          type="text"
        />
        <Input
          change={this.handleChange}
          value={this.updates.timeline}
          name="timeline" label="Timeline"
          type="text"
        />
      </div>
    );
  }
}

WorkEditItem.propTypes = {
  id: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
  defaults: PropTypes.object,
};

export default WorkEditItem;
