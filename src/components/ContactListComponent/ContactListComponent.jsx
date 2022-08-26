import PropTypes from 'prop-types';

import { Element, Button } from './ContactListComponentStyled';
import { useDeleteContactMutation } from 'redux/services/API/api';
import { useCallback } from 'react';

export const ContactListComponent = ({ contact }) => {
  const [deleteContact] = useDeleteContactMutation();
  const onDelete = useCallback(
    contact => deleteContact(contact),
    [deleteContact]
  );
  return (
    <Element>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <Button type="button" onClick={() => onDelete(contact)}>
        Delete
      </Button>
    </Element>
  );
};

ContactListComponent.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    phone: PropTypes.string,
    id: PropTypes.string,
  }),
};
