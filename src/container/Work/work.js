import React from 'react';
import {
  H2,
  P,
  Hr,
  Row,
  Col,
  H5,
  Emp,
  Button,
} from 'jam-components';

function Work() {
  return (
    <div>
      <H2>Work Experince</H2>
      <Hr />
      <Row>
        <Col num="six">
          <H5>GoGuardian</H5>
          <P>Software Engineer</P>
          <P><Emp>May, 2016 - Current</Emp></P>
          <Button color="blue">About</Button>
        </Col>
        <Col num="six">
          <H5>Pason Systems</H5>
          <P>Software Developer</P>
          <P><Emp>May, 2014 - August, 2015</Emp></P>
          <Button color="blue">About</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Work;
