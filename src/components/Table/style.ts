import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;

  th {
    font-weight: bold;
    color: #036c86;
  }

  td,
  th {
    border: 1px solid #393b48;
    padding: 2px 4px;
  }

  td:not(:first-child) {
    border-left: none;
    text-align: center;
    min-width: 100px;
  }

  td {
    color: black;
    width: 100%;
  }

  a {
    color: #036c86;

    &:hover {
      font-weight: bold;
    }
  }
`;
