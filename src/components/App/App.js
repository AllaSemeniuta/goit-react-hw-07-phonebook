import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Toaster } from 'react-hot-toast';
import GlobalStyle from 'components/GlobalStyle';
import Title from '../Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { Wrapper } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {/* <Title as="h1">Phonebook</Title> */}
        <ContactForm />
        <Title mb="30px">Contacts</Title>
        {isLoading && !error ? (
          <b>Request in progress...</b>
        ) : (
          <>
            <Filter />
            <ContactList />
            <Toaster />
          </>
        )}
      </Wrapper>
    </>
  );
};
