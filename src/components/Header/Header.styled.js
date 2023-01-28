import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  z-index: 100;

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
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${props => props.theme.breakpoints.tab} {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
  ${props => props.theme.breakpoints.desc} {
    justify-content: space-around;
    align-items: flex-start;
  }
`;
