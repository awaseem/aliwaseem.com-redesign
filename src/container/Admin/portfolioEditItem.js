import React, { PropTypes } from 'react';
import {
  Input,
  TextArea,
} from 'jam-components';

class PortfolioEditItem extends React.Component {
  constructor(props) {
    super(props);
    this.updates = {
      title: props.defaults.title,
      shortDescription: props.defaults.shortDescription,
      description: props.defaults.description,
      source: props.defaults.source,
      example: props.defaults.example,
      image: props.defaults.image,
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
          value={this.updates.title}
          name="title" label="Title"
          type="text"
        />
        <Input
          change={this.handleChange}
          value={this.updates.shortDescription}
          name="shortDescription"
          label="Short Description" type="text"
        />
        <TextArea
          change={this.handleChange}
          value={this.updates.description}
          name="description" label="Description"
        />
        <Input
          change={this.handleChange}
          value={this.updates.source}
          name="source"
          label="Source"
          type="text"
        />
        <Input
          change={this.handleChange}
          value={this.updates.example}
          name="example"
          label="Example"
          type="text"
        />
        <Input
          change={this.handleChange}
          value={this.updates.image}
          name="image"
          label="Image"
          type="text"
        />
      </div>
    );
  }
}

PortfolioEditItem.propTypes = {
  id: PropTypes.number.isRequired,
  update: PropTypes.func.isRequired,
  defaults: PropTypes.object,
};

export default PortfolioEditItem;
