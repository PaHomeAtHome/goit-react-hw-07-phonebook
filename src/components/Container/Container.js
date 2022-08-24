import ContainerStyle from './ContainerStyles';
import PropTypes from 'prop-types';

function Container({ children }) {
  return <ContainerStyle>{children}</ContainerStyle>;
}

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
