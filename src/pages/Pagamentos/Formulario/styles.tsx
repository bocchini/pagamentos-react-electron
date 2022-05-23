import styled from 'styled-components';
import { shade } from 'polished';
import { Colors } from 'styles/colors';

export const List = styled.div`
  display:flex;  
  justify-content: center;
  flex-wrap: wrap;
  h2 {
    text-align: center;
    font-size: 1.5rem;
    color: blue;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 20px 10px 20px 5px;
  justify-content: center;
  label {
    margin: 0 15px 5px 10px;
    display: inline-block;    
    width: 115px;
  }
  input {  
    width: 145px;
  }
  div {
    margin: 0 5px 5px 0;
  } 

`;

export const Error = styled.div`
  color: red;
`;

export const Button = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  button {
    font-size: 1rem;   
    align-items:center;
    display:flex;  
    border: 2px solid ${Colors.pastel};
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