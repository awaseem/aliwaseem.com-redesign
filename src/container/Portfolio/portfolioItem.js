import React from 'react';
import {
  H2,
  Hr,
  Container,
  Img,
  P,
  Button,
} from 'jam-components';

function PortfolioItem() {
  return (
    <div>
      <Container>
        <br />
        <H2>Jam</H2>
        <Hr />
        <Button color="blue">Source Code</Button>
        <span style={{ paddingLeft: '10px', paddingRight: '10px' }} />
        <Button color="red">Example</Button>
        <P>
          Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Aenean commodo ligula eget dolor. Aenean massa.
          Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
          pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
          fringilla vel, aliquet nec,
          vulputate eget, arcu. In
          enim justo, rhoncus ut, imperdiet a, venenatis vitae,
          justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
          Cras dapibus. Vivamus elementum semper nisi.
        </P>
        <Img src="https://github.com/awaseem/Jam/raw/master/assets/JamCover.png" alt="jam" width="100%" />
      </Container>
    </div>
  );
}

export default PortfolioItem;
