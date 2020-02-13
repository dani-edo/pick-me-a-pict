import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const modalEmpty = () => (
  <Modal trigger={<Button>Basic Modal</Button>} basic size="small">
    <Header icon="archive" content="Archive Old Messages" />
    <Modal.Content>
      <p>image not found</p>
    </Modal.Content>
    <Modal.Actions>
      <Button color="green" inverted>
        <Icon name="checkmark" /> Ok
      </Button>
    </Modal.Actions>
  </Modal>
);

export default modalEmpty;
