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
import '../../styles/header.css';

const HEADER_IMAGE = image;
const HEADER_HEIGHT = '100vh';
const BUTTON_COLOR = 'black';
const HEADER_PADDING_TOP = '0px';

function Header() {
  return (
    <JamHeader
      image={HEADER_IMAGE}
      height={HEADER_HEIGHT}
      paddingTop={HEADER_PADDING_TOP}
    >
      <div className="header-content">
        <TextCenter>
          <H1>Ali Waseem</H1>
          <H5>Software Engineer</H5>
          <H6>Proud Canadian living in Los Angeles</H6>
          <Button click={() => jump('#summary')} color={BUTTON_COLOR}>tell me more</Button>
        </TextCenter>
      </div>
    </JamHeader>
  );
}

export default Header;
