import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { StyledContainer } from './AppStyle';
import { Section } from './Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/api';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <StyledContainer>
        <Section title="Phonebook">
          <Form />
        </Section>
        {isLoading && !error && <p>Request in progress...</p>}
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </StyledContainer>
    </>
  );
};
