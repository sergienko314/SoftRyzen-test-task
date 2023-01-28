import styled from 'styled-components';

export const Wrapper = styled.div`
  body {
    overflow: ${({ currentImage }) => (currentImage ? 'hidden' : 'none')};
  }
  padding-bottom: 40px;
  padding-top: 56px;

  ${props => props.theme.breakpoints.tab} {
    padding-top: 48px;
  }
  ${props => props.theme.breakpoints.desc} {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const WrapperContent = styled.div`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const ListItem = styled.ul`
  display: flex;
  gap: 17px;
  flex-direction: column;

  ${props => props.theme.breakpoints.tab} {
    flex-direction: initial;
    flex-wrap: wrap;
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Item = styled.li`
  flex-basis: calc((100% - 18 * 2) / 3);
  /* calc((100% - 18 * 3- 1) / 4); */
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Img = styled.img`
  width: 280px;

  display: block;

  margin-left: auto;
  margin-right: auto;

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
  margin-left: auto;
  margin-right: auto;
  ${props => props.theme.breakpoints.tab} {
    font-size: ${p => p.theme.fontSizes.ms};
  }
  ${props => props.theme.colors.main} {
  }
`;

export const Title = styled.h3`
  font-size: ${p => p.theme.fontSizes.xlx};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  margin-top: 16px;
  width: 220px;
  margin-left: auto;
  margin-right: auto;
  ${props => props.theme.breakpoints.tab} {
    font-size: ${p => p.theme.fontSizes.xll};
    width: 100%;
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
  width: 207px;
  margin-left: auto;
  margin-right: auto;
  ${props => props.theme.breakpoints.tab} {
    font-size: ${p => p.theme.fontSizes.ms};
    margin-bottom: 30px;
    width: 100%;
  }
  ${props => props.theme.breakpoints.desc} {
    margin-bottom: 36px;
  }
`;
