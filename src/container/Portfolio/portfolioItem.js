import React, { PropTypes } from 'react';
import { List, Map } from 'immutable';
import { connect } from 'react-redux';
import {
  H2,
  Hr,
  Container,
  Img,
  P,
  Button,
} from 'jam-components';

function PortfolioItem({ title, description, source, example, image }) {
  return (
    <div>
      <Container>
        <br />
        <H2>{title}</H2>
        <Hr />
        <Button click={() => window.open(source)} color="blue">Source Code</Button>
        <span style={{ paddingLeft: '10px', paddingRight: '10px' }} />
        <Button click={() => window.open(example)} color="red">Example</Button>
        <P>
          {description}
        </P>
        <Img src={image} alt={title} width="100%" />
      </Container>
    </div>
  );
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  const defaultState = {
    title: 'ERR',
    description: 'ERR',
    source: 'ERR',
    example: 'ERR',
    image: 'ERR',
  };
  const itemName = ownProps.params.item;
  const itemInState = state.get('portfolio') || List();
  const item = itemInState.filter(
    items => items.get('title') === itemName
  ).first() || Map(defaultState);
  return {
    title: item.get('title'),
    description: item.get('description'),
    source: item.get('source'),
    example: item.get('example'),
    image: item.get('image'),
  };
}

export default connect(mapStateToProps)(PortfolioItem);
