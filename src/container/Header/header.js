import React from 'react';
import {
  Header as JamHeader,
  H1,
} from 'jam-components';

const HEADER_IMAGE = 'http://66.media.tumblr.com/a734da7b5eee3e683179760f95c00342/tumblr_oaqg7qn30y1tq11emo1_1280.jpg';
const HEADER_HEIGHT = '65vh';

function Header() {
  return (
    <JamHeader
      image={HEADER_IMAGE}
      height={HEADER_HEIGHT}
    >
      <H1 align="center">Ali Waseem</H1>
    </JamHeader>
  );
}

export default Header;
