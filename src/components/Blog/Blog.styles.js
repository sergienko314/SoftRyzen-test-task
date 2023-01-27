import styled from 'styled-components';
export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.background.accent};
  margin-left: -20px;
  margin-right: -20px;
  display: flex;
  flex-direction: column;

  ${props => props.theme.breakpoints.tab} {
    flex-direction: row;
    margin-left: -32px;
    margin-right: -32px;
  }
  ${props => props.theme.breakpoints.desc} {
    margin-left: -28px;
    margin-right: -28px;
  }
`;

export const WrapperContent = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 79px;
  margin-bottom: 79px;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.normal};
  ${props => props.theme.breakpoints.tab} {
    margin-top: 62px;
    margin-bottom: 0;
  }
  ${props => props.theme.breakpoints.desc} {
    margin-top: 80px;
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  width: 320px;
  font-size: 0px;
  ${props => props.theme.breakpoints.tab} {
    width: 368px;
    /* height: 589px; */
  }
  ${props => props.theme.breakpoints.desc} {
    width: 670px;
    /* height: 460px; */
  }
`;

export const Preview = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};

  ${props => props.theme.breakpoints.tab} {
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
