import PropTypes from 'prop-types';

import { Element, Button } from './ContactListComponentStyled';
import { useDeleteContactMutation } from 'redux/API/api';

export const ContactListComponent = ({ contact }) => {
  const [deleteContact, { status }] = useDeleteContactMutation();

  return (
    <Element>
      {(status === 'uninitialized' && (
        <>
          <p>
            {contact.name}: {contact.phone}
          </p>
          <Button type="button" onClick={() => deleteContact(contact)}>
            Delete
          </Button>
        </>
      )) || <p>Deleting...</p>}
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
