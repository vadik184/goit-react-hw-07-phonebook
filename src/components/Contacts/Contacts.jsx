import { useDispatch } from 'react-redux';
import {
  StyledDeletButton,
  StyledListItem,
  StyledListItemText,
} from 'components/ContactList/ContactListStyle';
import { deleteContact } from '../../redux/api';
import { formatName, formatPhoneNumber } from 'helpers/script';

export const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <StyledListItem key={id}>
      <StyledListItemText>
        {formatName(name)}: {formatPhoneNumber(number)}
      </StyledListItemText>
      <StyledDeletButton
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </StyledDeletButton>
    </StyledListItem>
  );
};
