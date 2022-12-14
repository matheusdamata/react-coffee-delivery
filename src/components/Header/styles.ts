import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    height: 2.5rem;
  }
`

export const HeaderOptions = styled.div`
  height: 2.5rem;

  display: flex;
  flex-direction: row;
`

export const LocationUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['purple-light']};
  border-radius: 8px;

  padding: 0.5rem;

  font-size: 0.875rem;
  color: ${(props) => props.theme['purple-dark']};

  & svg {
    color: ${(props) => props.theme.purple};
    margin-right: 4px;
  }
`

export const HeaderButton = styled.button`
  width: 2.5rem;
  height: 100%;
  background: ${(props) => props.theme['yellow-light']};

  border-radius: 8px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 0.75rem;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  svg:active {
    color: ${(props) => props.theme.yellow};
  }
`

export const NavLinkStyled = styled(NavLink)`
  width: 2.5rem;
  height: 100%;

  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: ${(props) => props.theme['yellow-dark']};

  &:active {
    color: ${(props) => props.theme.yellow};
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;
    position: absolute;

    background: ${(props) => props.theme['yellow-dark']};

    border-radius: 50%;

    font-size: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.white};

    margin-top: -35px;
    margin-right: -35px;
  }
`
