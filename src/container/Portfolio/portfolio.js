import React from 'react';
import {
  Container,
  Row,
  Col,
  H2,
  H5,
  Hr,
  P,
  Link,
  Button,
  Emp,
} from 'jam-components';

function Portfolio() {
  return (
    <div id="summary">
      <Container>
        <Row>
          <Col num="six">
            <H2>Summary</H2>
            <Hr />
            <P>
              My name is Ali Waseem.
              I grew up in Calgary, Alberta, Canada and playing video games is my hobby.
              I studied at the University of Calgary as an Electrical and
              Computer Engineer and I love to program and tinker with technology.
              I also love JavaScript, Java, Python and C and love to mess
              around with new web frameworks.
              I love making random websites that do random and cool things.
            </P>
          </Col>
          <Col num="six">
            <H2>Contact</H2>
            <Hr />
            <P>The best way to reach me.</P>
            <P>Email: <Link href="mailto:contact@aliwaseem.com">contact@aliwaseem.com</Link></P>
            <P>Github: <Link href="https://github.com/awaseem">github.com/awaseem</Link></P>
            <P>LinkedIn: <Link href="https://www.linkedin.com/in/waseema393">linkedin.com/in/waseema393</Link></P>
          </Col>
        </Row>
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
        <br />
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
        <br />
      </Container>
    </div>
  );
}

export default Portfolio;
