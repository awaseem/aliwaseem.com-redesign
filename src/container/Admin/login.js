import React from 'react';
import { connect } from 'react-redux';
import {
  Input,
  Row,
  Col,
  H2,
  Button,
  Container,
} from 'jam-components';
import { setLoginToken } from '../../actions/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.username = '';
    this.password = '';
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this[e.target.name] = e.target.value;
  }

  render() {
    return (
      <Container>
        <Row>
          <Col num="three">
            <br />
          </Col>
          <Col num="six">
            <br />
            <H2 align="center">Welcome Back!</H2>
            <Input
              label="Username"
              name="username"
              change={this.handleChange}
              placeholder="Enter a username"
              type="text"
            />
            <Input
              label="Password"
              name="password"
              change={this.handleChange}
              placeholder="Enter a password"
              type="password"
            />
            <br />
            <Button
              click={
                () => this.props.dispatch(setLoginToken(this.username, this.password))
              }
              color="green"
            >Submit</Button>
          </Col>
          <Col num="three">
            <br />
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.get('token'),
  };
}

export default connect(mapStateToProps)(Login);
