import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  padding-top: 22px;
  margin-left: 24px;
  margin-bottom: 16px;

  transition-property: scale transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
  }

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SpanZero = styled.span`
  & > svg {
    width: 39px;
    height: 31px;
  }
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SpanOne = styled.span`
  color: ${props => props.theme.colors.accent};
  font-size: 28px;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SpanTwo = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: 28px;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
