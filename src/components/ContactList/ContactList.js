import { Box } from 'components/Box/Box';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { Item } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterArr = getFilteredContacts();

  return (
    <Box as="ul">
      {filterArr.map(({ name, phone, id }) => (
        <Item key={id} display="flex">
          <ContactItem name={name} phone={phone} id={id} />
        </Item>
      ))}
    </Box>
  );
};
