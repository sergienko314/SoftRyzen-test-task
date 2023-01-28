import styled from 'styled-components';
import { Container } from '../../page/HomePage/HomePage.styled';
export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.background.accent};
  ${props => props.theme.breakpoints.tab} {
    display: flex;
  }
  ${props => props.theme.breakpoints.desc} {
    max-width: 1360px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Div = styled.div`
  background-color: ${props => props.theme.colors.background.accent};
  ${props => props.theme.breakpoints.tab} {
    flex-basis: 100%;
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const WrapperContainer = styled(Container)`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
    padding-left: 20px;
    padding-right: 28px;
  }
`;

export const WrapperContent = styled.div`
  padding-bottom: 79px;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.normal};
  ${props => props.theme.breakpoints.tab} {
    padding-bottom: 62px;
  }

  ${props => props.theme.breakpoints.desc} {
    padding-bottom: 86px;
  }
`;

export const Img = styled.img`
  width: 100%;

  ${props => props.theme.breakpoints.tab} {
    height: 100%;
    object-fit: cover;
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Preview = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  margin-top: 79px;
  ${props => props.theme.breakpoints.tab} {
    font-size: ${p => p.theme.fontSizes.ms};
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Title = styled.h3`
  font-size: ${p => p.theme.fontSizes.xlx};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  margin-top: 16px;
  ${props => props.theme.breakpoints.tab} {
    font-size: ${p => p.theme.fontSizes.xll};
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
    font-size: ${p => p.theme.fontSizes.ms};
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Button = styled.button`
  display: flex;
  gap: 8px;
  font-size: 16px;
  margin-right: auto;
  margin-top: 24px;

  align-items: center;
  font-size: 18px;
  line-height: ${p => p.theme.lineHeights.secondary};
  text-align: center;
  color: ${props => props.theme.colors.white};
  padding: 16px 32px;
  border: 1px solid ${props => props.theme.colors.background.white};

  border-radius: 5px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.background.accent};

  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);

  :focus,
  :hover {
    background-color: ${props => props.theme.colors.background.white};
    border: 1px solid ${props => props.theme.colors.background.accent};
    color: ${props => props.theme.colors.accent};
    background-position: right center;
  }
  :active {
  }
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
