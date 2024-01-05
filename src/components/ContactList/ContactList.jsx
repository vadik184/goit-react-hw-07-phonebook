import { useSelector } from 'react-redux';

import { ContactListItem } from 'components/Contacts/Contacts';
import { StyledList } from './ContactListStyle';
import { selectFilteredContacts } from '../../redux/selectors';
export const ContactList = () => {
  const filterContacts = useSelector(selectFilteredContacts);

  return (
    <StyledList>
      {filterContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </StyledList>
  );
};
