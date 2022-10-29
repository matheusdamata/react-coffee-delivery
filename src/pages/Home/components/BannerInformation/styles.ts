import styled from 'styled-components'

type IconContentType = 'yellowDark' | 'yellow' | 'baseSubTitle' | 'purple';

interface IconContentProps {
  bgColor: IconContentType;
}

const backgroundVariants = {
  yellowDark: '#C47F17',
  yellow: '#DBAC2C',
  baseSubTitle: '#403937',
  purple: '#8047F8',
}

export const IconContent = styled.div<IconContentProps>`
  width: 2rem;
  height: 2rem;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  ${props => {
    return `background-coor: ${backgroundVariants[props.bgColor]}`
  }}
`