import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh  - 10rem);
  margin: 5rem auto; 
  
  padding: 2.5rem;

  display: flex;
  flex-direction: column;

  border-radius: 8px;
  background: ${props => props.theme["gray-800"]};

`