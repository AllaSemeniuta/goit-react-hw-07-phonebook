import PropTypes from 'prop-types';
import { TitleStyled } from './Title.styled';

const Title = ({ children, as, mb }) => {
  return (
    <TitleStyled as={as} mb={mb}>
      {children}
    </TitleStyled>
  );
};

export default Title;
Title.defaultProps = {
  as: 'h2',
  mb: '8px',
};

Title.propTypes = {
  children: PropTypes.node,
  as: PropTypes.string,
  mb: PropTypes.string,
};
