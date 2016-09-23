import React from 'react';
import {
  TextArea,
  Button,
} from 'jam-components';

function SummaryEdit() {
  return (
    <div>
      <TextArea label="Summary" />
      <Button color="green">Save</Button>
    </div>
  );
}

export default SummaryEdit;
