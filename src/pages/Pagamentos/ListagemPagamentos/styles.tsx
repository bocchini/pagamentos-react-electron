import styled from 'styled-components';
import { shade } from 'polished';

import { Colors } from 'styles/colors';

export const Table = styled.table` 
  margin: 0 10px 0 10px;
  thead{
    font-size: 1rem;
    font-weight: bold;
  }

  th, td{ 
    border: 1px solid;
    margin: 2px;
  }
`;

export const List = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5px 10 0 10;
  text-align: center;
  h2 {
    font-size: 1.5rem;
    color: blue;
  }
`;

export const Button = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  button {
    margin: 2px 2px;
    font-size: 1rem;   
    align-items:center;
    display:flex;  
    border: 2px solid  ${Colors.pastel};
    background-color: ${Colors.button};
    color: #f4ede8;
    cursor: pointer;
    transition: background-color 0.2s;
    :disabled {
      background-color: #a6a6a6;
      color: #a6a6a6;
    }
    &:hover {
      background: ${shade(0.2, '#6e6e6e')};
    }
  }
`;
