import React from 'react';
import {
  Row,
  Col,
  H2,
  H5,
  Hr,
  P,
  Button,
} from 'jam-components';

function Portfolio() {
  return (
    <div>
      <H2>Portfolio</H2>
      <Hr />
      <Row>
        <Col num="four">
          <H5>Jam</H5>
          <P>React UI Library.</P>
          <Button color="green">Learn More</Button>
        </Col>
        <Col num="four">
          <H5>Reddit Bot</H5>
          <P>Simple Url Shortner.</P>
          <Button color="green">Learn More</Button>
        </Col>
        <Col num="four">
          <H5>Little Jump Man</H5>
          <P>My Personal Website.</P>
          <Button color="green">Learn More</Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col num="four">
          <H5>Notii</H5>
          <P>React UI Library.</P>
          <Button color="green">Learn More</Button>
        </Col>
        <Col num="four">
          <H5>Smart Mirror</H5>
          <P>Simple Url Shortner.</P>
          <Button color="green">Learn More</Button>
        </Col>
        <Col num="four">
          <H5>Blog.aliwaseem.com</H5>
          <P>My Personal Website.</P>
          <Button color="green">Learn More</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio;
