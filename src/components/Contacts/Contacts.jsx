import { useDispatch } from 'react-redux';
import {
  StyledDeletButton,
  StyledListItem,
  StyledListItemText,
} from 'components/ContactList/ContactListStyle';
import { deleteContact } from '../../redux/api';

export const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <StyledListItem key={id}>
      <StyledListItemText>
        {name}: {number}
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
