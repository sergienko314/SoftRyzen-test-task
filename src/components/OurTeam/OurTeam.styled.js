import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 16px;
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

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const WrapperContact = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Name = styled.h3`
  margin-top: 16px;
  font-size: ${p => p.theme.fontSizes.ml};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.main};
  font-weight: ${props => props.theme.fontWeights.normal};

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Position = styled.p`
  font-size: ${p => p.theme.fontSizes.ml};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.main};
  font-weight: ${props => props.theme.fontWeights.normal};
  margin-bottom: 30px;

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Img = styled.img`
  width: 280px;
  height: 186px;
  display: block;

  max-width: 100%;
  height: auto;

  object-fit: cover;
  object-position: center;

  ${props => props.theme.breakpoints.tab} {
    width: 223px;
    height: 148px;
  }
  ${props => props.theme.breakpoints.desc} {
    width: 420px;
    height: 287px;
  }
`;

export const Preview = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.secondary};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.fontWeights.normal};
  margin-top: 72px;

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
  margin-bottom: 63px;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  opacity: 0;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4)
  );
`;
export const Item = styled.li`
  svg {
    width: 35px;
    height: 35px;
    fill: #ffffff;
    use {
    }
  }
`;
export const ItemImg = styled.li`
  position: relative;
`;

export const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 280px;
  height: 186px;
  display: block;
  opacity: 0;
  /* background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.4)
  ); */
  transition-property: all;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);

  :hover {
    opacity: 1;
    ${List} {
      opacity: 1;
    }
    box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.4);
  }
  :hover ~ ${List} {
    opacity: 1;
  }

  ${props => props.theme.breakpoints.tab} {
    width: 223px;
    height: 148px;
  }
  ${props => props.theme.breakpoints.desc} {
    width: 420px;
    height: 287px;
  }
`;
