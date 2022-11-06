import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme['base-text']};

  gap: 2rem;

  strong {
    font-size: 1rem;
    font-weight: bold;
  }
`

export const ContentBase = styled.div`
  display: flex;
  flex-direction: row;
`

type IconContentType = 'yellowDark' | 'yellow' | 'purple'

interface IconContainerBgColorProps {
  bgColor: IconContentType
}

const backgroundVariants = {
  yellowDark: '#C47F17',
  yellow: '#DBAC2C',
  baseSubTitle: '#403937',
  purple: '#8047F8',
}

export const IconContainer = styled.div<IconContainerBgColorProps>`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.75rem;

  border-radius: 50%;

  ${(props) => {
    return css`
      background-color: ${backgroundVariants[props.bgColor]};
    `
  }}
  svg {
    color: ${(props) => props.theme.white};
  }
`

export const Information = styled.div``
