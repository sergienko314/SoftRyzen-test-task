import styled from 'styled-components';
import { PhotoProvider, PhotoView } from 'react-photo-view';
export const Wrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  padding-top: 56px;
  background: #f4f4f4;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const WrapperContent = styled.div`
  text-align: center;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const ListItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
export const PhotoViewPort = styled(PhotoView)`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
export const ImgBd = styled.div`
  border-radius: 4px;
  border: 9px solid white;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const PhotoProviderPort = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
export const Img = styled.img`
  width: 280px;
  height: 176px;
  display: block;
  src: ${props => props.imgLLL1x};
  max-width: 100%;
  height: auto;

  object-fit: cover;
  object-position: center;
  transition-property: all;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
  &:hover {
    filter: brightness(1.1);
  }
  ${props => props.theme.breakpoints.tab} {
    src: ${props => props.imgLLL1x};
    width: 223px;
    height: 148px;
  }
  ${props => props.theme.breakpoints.desc} {
    src: ${props => props.imgLLL1x};
    width: 420px;
    height: 287px;
  }
`;

export const Preview = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.fontWeights.normal};

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.colors.main} {
  }
`;

export const Title = styled.h3`
  font-size: ${p => p.theme.fontSizes.xlx};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  margin-top: 16px;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Text = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  margin-top: 24px;
  margin-bottom: 31px;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
