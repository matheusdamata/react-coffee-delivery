import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 2.5rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.3;
  }
`

export const SideLeft = styled.div`
  flex: 1;
  margin-right: 2rem;
`

export const SideLeftContainer = styled.div`
  margin-top: 1rem;
`

export const SideLeftFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 0.75rem;
  padding: 2.5rem;

  border-radius: 8px;

  background: ${(props) => props.theme['base-card']};
`

export const SideLeftFormHeader = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    margin-right: 0.5rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  strong {
    font-weight: 400;
    line-height: 1.3;

    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;

    margin-top: 2px;

    color: ${(props) => props.theme['base-text']};
  }
`

export const SideLeftFooter = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 0.75rem;
  padding: 2.5rem;

  border-radius: 8px;

  background: ${(props) => props.theme['base-card']};

  svg {
    margin-right: 0.5rem;
    color: ${(props) => props.theme.purple};
  }

  strong {
    font-weight: 400;
    line-height: 1.3;

    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;

    margin-top: 2px;

    color: ${(props) => props.theme['base-text']};
  }
`

export const SideLeftFormContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;

  input {
    border: 0;
    border-radius: 8px;

    margin-bottom: 1rem;
    padding: 0.75rem;

    font-size: 0.875rem;

    background: ${(props) => props.theme['base-input']};
  }
`

export const SideLeftFooterContent = styled.div`
  display: flex;
  flex-direction: row;
`

export const InputBase = styled.input`
  width: 12.5rem;
`

export const SideLeftFormFlex = styled.div`
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

export const SideLeftFooterButtons = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 2rem;

  gap: 0.75rem;
`

export const SideRight = styled.div`
  flex: 1;
`

export const SideRightContainer = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;

  background: ${(props) => props.theme['base-card']};

  border-top-left-radius: 8px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 8px;

  hr {
    height: 2px;
    background: ${(props) => props.theme['base-button']};

    border: 0;

    margin: 1.5rem 0;
  }
`

export const SideRightListProductsCartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    animation: AnimImageCartEmpty infinite 10s linear;
  }

  span {
    margin-top: 1rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @keyframes AnimImageCartEmpty {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`

export const SideRightListProductsCart = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 13.125rem;

  overflow-y: auto;
`

export const SideRightFooter = styled.div``

export const SideRightFooterTotalItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SideRightFooteDelivery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0.75rem 0;
`

export const SideRightFooterTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SideRightButtonConfirmOrder = styled.button`
  width: 100%;
  padding: 0.75rem 0;
  margin-top: 1.5rem;

  background: ${(props) => props.theme.yellow};
  border: 0;
  border-radius: 8px;

  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.6;
  color: ${(props) => props.theme.white};

  cursor: pointer;
`
