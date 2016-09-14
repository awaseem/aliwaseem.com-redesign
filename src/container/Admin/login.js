import React from 'react';
import {
  Input,
  Row,
  Col,
  H2,
  Button,
  Container,
} from 'jam-components';

function Login() {
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
            label="Username" placeholder="Enter a username" type="text"
          />
          <Input
            label="Password" placeholder="Enter a password" type="password"
          />
          <br />
          <Button color="green">Submit</Button>
        </Col>
        <Col num="three">
          <br />
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
