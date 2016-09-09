import { List, fromJS } from 'immutable';
import React from 'react';
import {
  P,
  Row,
  Col,
  H5,
  Emp,
  Button,
} from 'jam-components';
import { navigate } from '../history/history';

function createProjectItem(title = '', shortDescription = '') {
  return (
    <Col num="four">
      <H5>{title}</H5>
      <P>{shortDescription}</P>
      <Button click={() => navigate(`/item/${title}`)} color="green">Learn More</Button>
    </Col>
  );
}

function createWorkItem(company = '', position = '', timeline = '', url = '') {
  return (
    <Col num="six">
      <H5>{company}</H5>
      <P>{position}</P>
      <P><Emp>{timeline}</Emp></P>
      <Button click={() => window.open(url)} color="blue">About</Button>
    </Col>
  );
}

export function createProjectRows(projectItems = List()) {
  // Transform all items to JSX
  const projectItemsJsx = projectItems.map(
    (item) => createProjectItem(item.get('title'),
                                item.get('shortDescription'))
  ).toJS();
  const rows = [];
  let index = 0;
  while (projectItemsJsx.length !== 0) {
    const first = projectItemsJsx.shift();
    const second = projectItemsJsx.shift();
    const third = projectItemsJsx.shift();
    rows.push(
      <div key={index++}>
        <Row>
          {first}
          {second}
          {third}
        </Row>
        <br />
      </div>
    );
  }
  return rows;
}

export function createWorkRows(workItems = List()) {
  // Transform all items to JSX
  const workItemsJsx = workItems.map(
    (item) => createWorkItem(item.get('company'),
                             item.get('position'),
                             item.get('timeline'),
                             item.get('url'))
  ).toJS();
  const rows = [];
  let index = 0;
  while (workItemsJsx.length !== 0) {
    const first = workItemsJsx.shift();
    const second = workItemsJsx.shift();
    rows.push(
      <div key={index++}>
        <Row>
          {first}
          {second}
        </Row>
        <br />
      </div>
    );
  }
  return rows;
}
