import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  H2,
  Hr,
} from 'jam-components';
import { createWorkRows } from '../../helpers/colHelper';

function Work({ workRows }) {
  return (
    <div>
      <H2>Work Experince</H2>
      <Hr />
      {workRows}
    </div>
  );
}

Work.propTypes = {
  workRows: PropTypes.any.isRequired,
};

function mapStateToProps(state) {
  return {
    workRows: createWorkRows(state.get('work')),
  };
}

export default connect(mapStateToProps)(Work);
