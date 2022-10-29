import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  margin-bottom: 4rem;

  & > h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const ProductsListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  margin-top: 3.375rem;
`

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background: ${props => props.theme['base-card']};

  img {
    margin-top: -1rem;
  }

  & strong {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
  }

  & > span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;

    color: ${props => props.theme['base-label']};

    margin-top: 0.5rem;
    padding: 0 1.25rem;
  }
`

export const ProductItemTagCoffe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.theme['yellow-light']};
  border-radius: 6.25rem;

  margin: 1rem 0;
  padding: 0.25rem 0.5rem;

  & strong {
    font-size: 0.625rem;
    color: ${props => props.theme['yellow-dark']};
  }
`

export const ProductItemFooter = styled.footer`
  display: flex;
  flex-direction: row;

  margin: 1.25rem 0;
  
  & span {
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
  }

  & strong {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${props => props.theme['base-text']};
  }
`

export const ProductItemFooterAddToCart = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  background: ${props => props.theme['base-button']};
  margin-left: 1rem;
  padding: 0 0.5rem;
  border-radius: 8px;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3;

  button {
    border: 0;
    background: transparent;
    color: ${props => props.theme['purple']};
    cursor: pointer;
  }
`

export const ProductItemFooterButtonAddToCart = styled.button`
  width: 2.5rem;
  height: 100%;
  background: ${props => props.theme['purple-dark']};
  margin-left: 0.5rem;

  border-radius: 8px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  svg {
    color: ${props => props.theme['white']}
  }
`