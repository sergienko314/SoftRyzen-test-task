import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #333333;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 12px;
`;
export const Item = styled.li`
  cursor: pointer;
  svg {
    width: 35px;
    height: 35px;
    fill: #ffffff;
    transition-property: all;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
    :focus,
    :hover {
      fill: #28a745;
    }
    use {
    }
  }
`;
export const Text = styled.p`
  margin-bottom: 20px;
  text-align: center;
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;
