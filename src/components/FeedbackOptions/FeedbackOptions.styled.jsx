import styled from 'styled-components';

export const StyledOptionsList = styled.ul`
  display: flex;
  gap: 15px;
  padding: 0;
`;

export const StyledOptionsItem = styled.li`
  list-style: none;
`;

export const StyledOptionsButton = styled.button`
  padding: 5px 10px;
  text-transform: capitalize;
  font-weight: 700;
  border: 1px solid gray;
  border-radius: 5px;

  &:hover {
    background-color: orange;
    color: white;
  }
`;
