import { useSelector } from 'react-redux';
import { ContactListComponent } from 'components/ContactListComponent/ContactListComponent';

import { useGetContactByNameQuery } from 'redux/API/api';

export const ContactList = () => {
  const { data, error, isLoading } = useGetContactByNameQuery();

  const filter = useSelector(state => state.filter.filter);
  return (
    <ul>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data &&
        data
          .filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <ContactListComponent key={contact.id} contact={contact} />
          ))}
    </ul>
  );
};
