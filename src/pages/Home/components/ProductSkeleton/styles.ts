import styled from "styled-components";

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background: ${props => props.theme['base-card']};
`

export const ProductImage = styled.div`
  margin-top: -1rem;
`

export const Content = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
`