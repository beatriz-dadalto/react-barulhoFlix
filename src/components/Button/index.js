import styled from 'styled-components';

const Button = styled.a`
  background-color: #45AA22;
  color: var(--white);
  border: 1px solid #45AA22;
  /* background: var(--black); */
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: .3s;

  &:hover,
  &:focus {
    transform: scale(1.1);
    opacity: .9;
  }
  
`;

export default Button;
