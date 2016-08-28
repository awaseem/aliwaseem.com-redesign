import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  H2,
  P,
  Hr,
} from 'jam-components';

function Summary({ summary }) {
  return (
    <div id="summary">
      <H2>Summary</H2>
      <Hr />
      <P>
        {summary}
      </P>
    </div>
  );
}

Summary.propTypes = {
  summary: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    summary: state.get('summary') || 'N/A',
  };
}

export default connect(mapStateToProps)(Summary);
