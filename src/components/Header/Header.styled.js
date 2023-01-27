import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0px;
  left: 0px;
  z-index: 100;

  transition-property: background-color;
  transition-duration: 800ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
  margin-left: -20px;
  margin-right: -20px;

  ${props => props.scroll <= 120} {
    background: rgba(55, 55, 57, 0.8);
  }

  ${props => props.theme.breakpoints.tab} {
    margin-left: -32px;
    margin-right: -32px;

    ${props => props.scroll <= 70} {
      background: rgba(55, 55, 57, 0.8);
    }
  }
  ${props => props.theme.breakpoints.desc} {
    margin-left: -28px;
    margin-right: -28px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;

  ${props => props.theme.breakpoints.tab} {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding-left: 32px;
    padding-right: 32px;
  }
  ${props => props.theme.breakpoints.desc} {
    padding-left: 28px;
    padding-right: 28px;
  }
`;
