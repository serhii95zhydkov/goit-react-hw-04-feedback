import PropTypes from 'prop-types';
import { StyledSectionTitle } from './Section.styled';
import { StyledSectionContainer } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <StyledSectionContainer>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      {children}
    </StyledSectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
