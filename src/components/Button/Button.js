import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: #007b85;
  color: white;
  border: 2px solid #007b85;

  ${props =>
    props.outline &&
    css`
      background: transparent;
      color: #007b85;
    `};
`;

export default Button;