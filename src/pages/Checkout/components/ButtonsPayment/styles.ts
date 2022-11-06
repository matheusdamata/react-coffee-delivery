import styled from 'styled-components'

export const Button = styled.button`
  width: 11.25rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  border: 0;
  border-radius: 8px;

  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};

  background: ${(props) => props.theme['base-button']};

  padding: 1rem;
  white-space: nowrap;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.purple};
    box-shadow: none;
  }
`
