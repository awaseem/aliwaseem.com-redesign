import React, { PropTypes } from 'react';
import {
  Input,
} from 'jam-components';

class PortfolioEditItem extends React.Component {
  constructor(props) {
    super(props);
    this.updates = {
      title: '',
      shortDescription: '',
      description: '',
      source: '',
      example: '',
      image: '',
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
        <Input change={this.handleChange} name="title" label="Title" type="text" />
        <Input
          change={this.handleChange}
          name="shortDescription"
          label="Short Description" type="text"
        />
        <Input change={this.handleChange} name="description"label="Description" type="text" />
        <Input change={this.handleChange} name="source" label="Source" type="text" />
        <Input change={this.handleChange} name="example" label="Example" type="text" />
        <Input change={this.handleChange} name="image" label="Image" type="text" />
      </div>
    );
  }
}

PortfolioEditItem.propTypes = {
  id: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
};

export default PortfolioEditItem;
