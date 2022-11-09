import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  input:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
  }
`
export const InputBase = styled.input`
  width: 12.5rem;

  border: 0;
  border-radius: 8px;

  margin-bottom: 1rem;
  padding: 0.75rem;

  font-size: 0.875rem;

  background: ${(props) => props.theme['base-input']};
`

export const FormFlex = styled.div`
  display: flex;
`

export const InputBaseMarginR = styled(InputBase)`
  margin-right: 0.75rem;
`

export const InputBaseFlex = styled(InputBase)`
  flex: 1;
`

export const InputOptional = styled.div`
  display: flex;
  flex: 1;

  span {
    position: absolute;

    margin-top: 0.75rem;
    margin-left: 18rem;

    font-size: 0.75rem;
    font-style: italic;
    color: ${(props) => props.theme['base-label']};
  }

  input {
    padding-right: 4.5rem;
  }
`

export const TextInput = styled.span`
  position: absolute;

  margin-top: 0.75rem;
  margin-left: 18rem;

  font-size: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme['base-label']};
`

export const InputBaseFlexMarginR = styled(InputBase)`
  flex: 1;
  margin-right: 0.75rem;
`

export const InputBaseMinW = styled(InputBase)`
  width: 3.75rem;
`
