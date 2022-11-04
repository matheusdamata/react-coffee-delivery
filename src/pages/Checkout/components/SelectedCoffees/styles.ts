import styled from 'styled-components'

export const ProductSelectedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 4rem;
    height: 4rem;
  }

  strong {
    flex: 1;
    text-align: right;
  }

  & + & {
    margin-top: 1.5rem;
  }
`

export const ProductSelectedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 1.25rem;
`

export const ProductSelectedButtons = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 0.5rem;
`

export const ProductSelectedAddToCart = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  background: ${(props) => props.theme['base-button']};
  padding: 0 0.5rem;
  margin-right: 0.5rem;
  border-radius: 8px;

  button {
    border: 0;
    background: transparent;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`

export const ButtonTrash = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};

  border-radius: 8px;
  border: 0;
  padding: 0.5rem;

  background: ${(props) => props.theme['base-button']};

  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
    margin-right: 4px;
  }
`
