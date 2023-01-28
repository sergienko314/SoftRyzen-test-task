import styled from 'styled-components';
import { Container } from '../../page/HomePage/HomePage.styled';
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const WrapperContent = styled.div`
  text-align: center;
  margin-top: 56px;
  margin-bottom: 31px;
  ${props => props.theme.breakpoints.tab} {
    margin-top: 48px;
    margin-bottom: 30px;
  }
  ${props => props.theme.breakpoints.desc} {
    margin-top: 80px;
    margin-bottom: 36px;
  }
`;

export const ListItem = styled.ul`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  gap: 8px;

  ${props => props.theme.breakpoints.tab} {
    flex-direction: row;
    gap: 17px;
  }
  ${props => props.theme.breakpoints.desc} {
    gap: 20px;
  }
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;

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
export const Galeri = styled(Container)`
  margin-bottom: 40px;

  ${props => props.theme.breakpoints.tab} {
    /* width: 768px; */
  }
  ${props => props.theme.breakpoints.desc} {
    width: 1360px;
    margin-bottom: 80px;
  }
`;

export const Img = styled.img`
  width: 280px;
  display: block;
  max-width: 100%;

  object-fit: cover;
  object-position: center;
  transition-property: all;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
  &:hover {
    filter: brightness(1.1);
  }
  ${props => props.theme.breakpoints.tab} {
    width: 223px;
  }
  ${props => props.theme.breakpoints.desc} {
    width: 420px;
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

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
