import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  H2,
  P,
  Hr,
  Link,
} from 'jam-components';

function Contact({ email, github, linkedin }) {
  return (
    <div>
      <H2>Contact</H2>
      <Hr />
      <P>The best way to reach me.</P>
      <P>Email: <Link href={`mailto:${email}`}>{email}</Link></P>
      <P>Github: <Link href={`https://${github}`}>{github}</Link></P>
      <P>LinkedIn: <Link href={`https://www.${linkedin}`}>{linkedin}</Link></P>
    </div>
  );
}

Contact.propTypes = {
  email: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    email: state.get('email') || 'Loading...',
    github: state.get('github') || 'Loading...',
    linkedin: state.get('linkedin') || 'Loading...',
  };
}

export default connect(mapStateToProps)(Contact);
