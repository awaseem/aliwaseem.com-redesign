import React from 'react';
import {
  Header as JamHeader,
  H1,
  TextCenter,
  H5,
  H6,
  Button,
} from 'jam-components';
import jump from 'jump.js';
import image from './header.jpg';

const HEADER_IMAGE = image;
const HEADER_HEIGHT = '75vh';
const BUTTON_COLOR = 'black';
const HEADER_PADDING_TOP = '225px';

function Header() {
  return (
    <JamHeader
      image={HEADER_IMAGE}
      height={HEADER_HEIGHT}
      paddingTop={HEADER_PADDING_TOP}
    >
      <TextCenter>
        <H1>Ali Waseem</H1>
        <H5>Software Engineer, Proud Canadian</H5>
        <H6>Living in Los Angeles, CA</H6>
        <Button click={() => jump('#summary')} color={BUTTON_COLOR}>tell me more</Button>
      </TextCenter>
    </JamHeader>
  );
}

export default Header;
