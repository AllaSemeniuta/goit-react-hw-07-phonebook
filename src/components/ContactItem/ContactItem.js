import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { Box } from 'components/Box/Box';
import { Icon, Button } from './ContactItem.styled';

export const ContactItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box
        display="flex"
        alignItems="center"
        flexGrow="1"
        justifyContent="space-between"
        pl={4}
      >
        {' '}
        <p>{name}</p>
        <p>{phone}</p>
      </Box>

      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        <Icon />
      </Button>
    </Box>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
