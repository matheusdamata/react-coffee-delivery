import styled from 'styled-components'

import BackgroundImage from './../../assets/background.svg'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const BackgroundImageBanner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;

  filter: blur(80px);
  opacity: 0.5;

  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: contain;

  z-index: -1;
`

export const HomeSectionBanner = styled.section`
  display: flex;
  flex-direction: row;

  padding: 5.75rem 0;
`

export const SideLeft = styled.div`
  margin-right: 3.5rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};

    margin-top: 1rem;
  }
`

export const InformationalIconsBanner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  margin-top: 4.125rem;
`

export const InformationalIconsBannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SideRight = styled.div`
  img {
    width: 29.75rem;
    height: auto;
  }
`

export const HomeSectionProducts = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  margin-bottom: 4rem;

  & > h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ProductsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  margin-top: 3.375rem;
`
