import PropTypes from 'prop-types';

import { Element, Button } from './ContactListComponentStyled';
import { useDeleteContactMutation } from 'redux/API/api';

export const ContactListComponent = ({ contact }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <Element>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <Button type="button" onClick={() => deleteContact(contact)}>
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
