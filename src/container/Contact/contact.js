import React from 'react';
import {
  H2,
  P,
  Hr,
  Link,
} from 'jam-components';

function Contact() {
  return (
    <div>
      <H2>Contact</H2>
      <Hr />
      <P>The best way to reach me.</P>
      <P>Email: <Link href="mailto:contact@aliwaseem.com">contact@aliwaseem.com</Link></P>
      <P>Github: <Link href="https://github.com/awaseem">github.com/awaseem</Link></P>
      <P>LinkedIn: <Link href="https://www.linkedin.com/in/waseema393">linkedin.com/in/waseema393</Link></P>
    </div>
  );
}

export default Contact;
