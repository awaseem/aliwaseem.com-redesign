import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  H2,
  Hr,
} from 'jam-components';
import { createProjectRows } from '../../helpers/colHelper';

function Portfolio({ portfolioRows }) {
  return (
    <div>
      <H2>Portfolio</H2>
      <Hr />
      {portfolioRows}
    </div>
  );
}

Portfolio.propTypes = {
  portfolioRows: PropTypes.any.isRequired,
};

function mapStateToProps(state) {
  return {
    portfolioRows: createProjectRows(state.get('portfolio')),
  };
}

export default connect(mapStateToProps)(Portfolio);
