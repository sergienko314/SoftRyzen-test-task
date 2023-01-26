import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0px;
  left: 0px;

  z-index: 100;

  margin-left: auto;
  margin-right: auto;

  width: 320px;
  transition-property: background-color;
  transition-duration: 800ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
  ${props => props.scroll <= 120} {
    background: rgba(55, 55, 57, 0.8);
  }
  ${props => props.theme.breakpoints.tab} {
    ${props => props.scroll <= 70} {
      background: rgba(55, 55, 57, 0.8);
    }
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Wrapper = styled.div`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
