import React from 'react';
import {
  Header as JamHeader,
  H1,
  TextCenter,
  H5,
  H6,
  Button,
} from 'jam-components';

const HEADER_IMAGE = 'https://images.unsplash.com/photo-1445089073948-809762476ed5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=dd6c15997d6cf1dec40c7426acc9768d';
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
        <Button color={BUTTON_COLOR}>tell me more</Button>
      </TextCenter>
    </JamHeader>
  );
}

export default Header;
