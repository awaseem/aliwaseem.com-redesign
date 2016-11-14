import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Container,
  H1,
} from 'jam-components';
import SummaryEdit from './summaryEdit';
import ContactEdit from './contactEdit';
import WorkEdit from './workEdit';
import PortfolioEdit from './portfolioEdit';
import { navigate } from '../../history/history';

class Admin extends React.Component {
  componentDidMount() {
    if (this.props.token === 'ERR' || this.props.token === '' || !this.props.token) {
      navigate('/login');
    }
  }

  render() {
    return (
      <Container>
        <H1 align="center">Edit you're site!</H1>
        <Row>
          <Col num="six">
            <SummaryEdit />
          </Col>
          <Col num="six">
            <ContactEdit />
          </Col>
        </Row>
        <br />
        <Row>
          <WorkEdit />
          <br />
          <PortfolioEdit />
        </Row>
      </Container>
    );
  }
}

Admin.propTypes = {
  token: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    token: state.get('token'),
  };
}

export default connect(mapStateToProps)(Admin);
