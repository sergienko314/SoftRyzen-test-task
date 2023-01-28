import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 101;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 0px 10px 0px 10px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  box-sizing: border-box;

  ${props => props.theme.breakpoints.tab} {
    padding: 0px 60px 0px 60px;
  }

  ${props => props.theme.breakpoints.desc} {
    padding: 0px 80px 0px 80px;
  }
  /* @media (max-width: 900px) {
    padding: 0;
  } */
`;

export const SpanClose = styled.span`
  color: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-100%, 100%);
  display: block;
  width: 40px;
  height: 40px;
  font-size: 40px;
  font-weight: bold;
  /* opacity: 0.2; */
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  ${props => props.theme.breakpoints.tab} {
    opacity: 0.2;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const NavigationPrev = styled.span`
  position: absolute;
  top: 50%;
  transform: translate(10%, -50%);
  height: 80%;
  color: white;
  cursor: pointer;
  font-size: 60px;
  line-height: 60px;
  font-weight: bold;
  display: flex;
  align-items: center;
  opacity: 0.2;
  padding: 0 15px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  left: 0;
  :hover {
    opacity: 1;
  }
  @media (hover: none) {
    opacity: 0.2;
  }
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const NavigationNext = styled.span`
  position: absolute;
  top: 50%;
  transform: translate(-10%, -50%);
  height: 80%;
  color: white;
  cursor: pointer;

  font-size: 60px;
  line-height: 60px;
  font-weight: bold;
  display: flex;
  align-items: center;
  opacity: 0.2;
  padding: 0 15px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  right: 0;
  :hover {
    opacity: 1;
  }
  @media (hover: none) {
    opacity: 0.2;
  }
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Content = styled.div`
  margin: auto;
  padding: 0;
  /* width: 90%; */

  text-align: center;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Slide = styled.div`
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Img = styled.img`
  width: calc(${props => props.width}px - 20px);

  user-select: none;
  border: 9px solid #fff;
  border-radius: 4px;
  transition-property: opacity;
  transition-duration: 1000ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);

  ${props => props.theme.breakpoints.tab} {
    width: ${({ width }) => (width < 1000 ? `${width - 160}px` : '840px')};
  }

  ${props => props.theme.breakpoints.desc} {
    width: 900px;
  }
`;

export const Div = styled.div`
  position: relative;

  margin-left: auto;
  margin-right: auto;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
