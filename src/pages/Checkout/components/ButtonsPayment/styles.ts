import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 8px;

  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};

  background: ${(props) => props.theme['base-button']};

  padding: 1rem;
  white-space: nowrap;

  cursor: pointer;
`
