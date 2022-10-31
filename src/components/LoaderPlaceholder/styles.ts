import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: ${props => props.theme['loader-color']};
`

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  
  position: absolute;
  background: linear-gradient(to right, #eee 10%, #ddd 50%, #eee 90%);

  animation: loaderPlaceholder 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;

  @keyframes loaderPlaceholder {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`
