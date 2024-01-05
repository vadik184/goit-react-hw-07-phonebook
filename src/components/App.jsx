import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import { StyledContainer } from './AppStyle';
import { Section } from './Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/api';
import { useEffect } from 'react';
import { selectIsLoading } from '../redux/selectors';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <StyledContainer>
        <Section title="Phonebook">
          <Form />
        </Section>
        {isLoading && <Loader />}
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </StyledContainer>
    </>
  );
};
