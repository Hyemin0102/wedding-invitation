import styled from '@emotion/styled';

const Button = styled.button`
  //font-family: ONE-Mobile-POP, serif;
  padding:0.3em 0.5em;
  border-radius: 8px;
  border: 1px solid #dfdfdf;
  outline: none;
  box-shadow: none;
  font-size: 20px;
  cursor: pointer;
  background: white;
  display: flex;
  align-items: center;
  color: #1a1a1a;
  text-decoration: none;
  gap: 2px;
`.withComponent('a');

export default Button;
