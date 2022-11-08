import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
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

export const InputBaseFlexMarginR = styled(InputBase)`
  flex: 1;
  margin-right: 0.75rem;
`

export const InputBaseMinW = styled(InputBase)`
  width: 3.75rem;
`
