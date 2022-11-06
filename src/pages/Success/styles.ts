import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 5rem;
`

export const SideLeft = styled.div`
  margin-right: 6.375rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;

    color: ${(props) => props.theme['yellow-dark']};
  }

  strong {
    font-size: 1.25rem;
    font-weight: 400;
  }
`

export const SideLeftContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 32.875rem;

  /* border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(
      to right,
      ${(props) => props.theme['yellow-dark']},
      ${(props) => props.theme.purple}
    )
    1; */
  border: 1px solid ${(props) => props.theme.purple};
  border-top-right-radius: 2.25rem;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 2.25rem;
  border-bottom-right-radius: 0.375rem;

  gap: 2rem;

  margin-top: 2.5rem;
  padding: 2.5rem;
`

export const SideRight = styled.div`
  display: flex;
  align-items: flex-end;
`
