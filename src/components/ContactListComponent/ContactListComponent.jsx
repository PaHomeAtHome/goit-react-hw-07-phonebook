import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/actions/actions';
import { Element, Button } from './ContactListComponentStyled';

export const ContactListComponent = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <Element>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <Button type="button" onClick={() => dispatch(removeContact(contact.id))}>
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
