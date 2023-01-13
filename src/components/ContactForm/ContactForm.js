import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Button } from 'components/Button/Button';
import { Form, Label, Input, Wrapper } from './ContactForm.styled';
import { Box } from 'components/Box/Box';
import { toast } from 'react-hot-toast';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        throw new Error(`No case fo Form input name ${name}.`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      phone,
    };

    if (contacts.find(item => item.name === name)) {
      toast.error(`Name ${name} is alredy in contacts!`, {
        position: 'top-right',
      });
      resetState();
      return;
    }

    if (contacts.find(item => item.phone === phone)) {
      toast.error(`Number ${phone} is alredy in contacts!`, {
        position: 'top-right',
      });
      resetState();
      return;
    }

    dispatch(addContact(contact));
    resetState();
  };

  const resetState = () => {
    setName('');
    setPhone('');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          mb={3}
        >
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          mb={3}
        >
          <Label htmlFor="phone">Phone </Label>
          <Input
            id="phone"
            type="tel"
            name="phone"
            value={phone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </Box>
        <Button type="submit" text="Add contact" />
      </Form>
    </Wrapper>
  );
};
