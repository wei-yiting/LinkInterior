import styled from 'styled-components/macro';

const TextLogo = styled.h1`
  font-family: 'Exo 2', sans-serif;
  color: black;
  font-size: ${({ fontSize }) => fontSize || '2.25rem'};
  margin: 0;
`;

export default TextLogo;
