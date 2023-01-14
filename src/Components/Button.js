import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.primary ? 'gray' : 'black'};
  color: ${props => props.primary ? 'red' : 'white'};
  padding: 1rem 2rem;
  border: aqua 1px solid;
  cursor: pointer;
  ${props => props.rounded && `border-radius: 20px`}
`

export default Button;