import styled, { css } from 'styled-components'

type IconContentType = 'yellowDark' | 'yellow' | 'baseSubTitle' | 'purple'

interface IconContentProps {
  bgColor: IconContentType
}

const backgroundVariants = {
  yellowDark: '#C47F17',
  yellow: '#DBAC2C',
  baseSubTitle: '#403937',
  purple: '#8047F8',
}

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const IconContent = styled.div<IconContentProps>`
  width: 2rem;
  height: 2rem;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    return css`
      background-color: ${backgroundVariants[props.bgColor]};
    `
  }}

  svg {
    color: ${(props) => props.theme.white};
  }
`

export const IconText = styled.p`
  font-weight: 400;
  line-height: 1.3;

  color: ${(props) => props.theme['base-text']};

  margin-left: 0.75rem;
  white-space: nowrap;
`
