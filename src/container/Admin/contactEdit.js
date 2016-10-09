import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Input,
  Button,
} from 'jam-components';
import { setContactToStore } from '../../actions/actions';

class ContactEdit extends React.Component {
  constructor(props) {
    super(props);
    this.email = props.email;
    this.github = props.github;
    this.linkedin = props.linkedin;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this[e.target.name] = e.target.value;
  }

  render() {
    return (
      <div>
        <Input
          change={this.handleChange}
          label="Email" name="email"
          type="text" value={this.email}
        />
        <Input
          change={this.handleChange}
          label="Github" name="github"
          type="text" value={this.github}
        />
        <Input
          change={this.handleChange}
          label="Linkedin" name="linkedin"
          type="text" value={this.linkedin}
        />
        <Button
          color="green"
          click={() =>
            this.props.dispatch(
              setContactToStore(this.props.token, this.email, this.github, this.linkedin)
            )
          }
        >
          Save
        </Button>
      </div>
    );
  }
}

ContactEdit.propTypes = {
  dispatch: PropTypes.func.isRequired,
  token: PropTypes.string,
  email: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    token: state.get('token'),
    email: state.get('email'),
    github: state.get('github'),
    linkedin: state.get('linkedin'),
  };
}

export default connect(mapStateToProps)(ContactEdit);
