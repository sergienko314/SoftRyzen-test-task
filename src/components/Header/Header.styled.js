import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0px;
  left: 0px;

  z-index: 100;

  margin-left: auto;
  margin-right: auto;
  /* background: transparent; */

  /* outline: 1px solid red; */
  width: 320px;
  ${props => props.scroll <= 69} {
    background: green;
  }
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Wrapper = styled.div`
  /* margin-left: 80px;
  margin-right: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px; */
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
