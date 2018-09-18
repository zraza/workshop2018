import styled, { css } from 'styled-components';

const state = ({ state }) => {
  switch (state) {
    case 'success':
      return css`
        border-left: 8px solid green;
      `;
    case 'warning':
      return css`
        border-left: 8px solid yellow;
      `;
    case 'error':
      return css`
        border-left: 8px solid red;
      `;
  }
};

const ListItem = styled.li`
  list-style-type: none;
  padding: 16px;
  border-bottom: 1px solid #eee;
  &:hover {
    background: #eee;
  }
  &:last-child {
    border-bottom: 0;
  }
  ${state};
`;

export default ListItem;
