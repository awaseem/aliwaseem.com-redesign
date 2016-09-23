import React from 'react';
import {
  Input,
  Button,
} from 'jam-components';

function ContactEdit() {
  return (
    <div>
      <Input label="Email" type="text" />
      <Input label="Github" type="text" />
      <Input label="Linkedin" type="text" />
      <Button color="green">Save</Button>
    </div>
  );
}

export default ContactEdit;
