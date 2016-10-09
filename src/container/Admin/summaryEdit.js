import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  TextArea,
  Button,
} from 'jam-components';
import { setSummaryToStore } from '../../actions/actions';

class SummaryEdit extends React.Component {
  constructor(props) {
    super(props);
    this.summary = props.summary;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this[e.target.name] = e.target.value;
  }

  render() {
    return (
      <div>
        <TextArea
          label="Summary"
          name="summary"
          change={this.handleChange}
          value={this.props.summary}
        />
        <Button
          color="green"
          click={() => this.props.dispatch(setSummaryToStore(this.props.token, this.summary))}
        >Save</Button>
      </div>
    );
  }
}

SummaryEdit.propTypes = {
  summary: PropTypes.string,
  token: PropTypes.string,
  dispatch: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    summary: state.get('summary'),
    token: state.get('token'),
  };
}

export default connect(mapStateToProps)(SummaryEdit);
