import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #f4f4f4;

  ${props => props.theme.breakpoints.tab} {
    display: flex;
  }
  ${props => props.theme.breakpoints.desc} {
    max-width: 1360px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const Div = styled.div`
  ${props => props.theme.breakpoints.tab} {
    max-width: 48%;
    flex-basis: 100%;
  }
  ${props => props.theme.breakpoints.desc} {
    max-width: 670px;
  }
`;
export const Img = styled.img`
  width: 100%;

  ${props => props.theme.breakpoints.tab} {
    object-fit: cover;
    height: 100%;
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const WrapperForm = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  ${props => props.theme.breakpoints.tab} {
    flex-basis: 100%;
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 25px;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Button = styled.button`
  margin-right: auto;
  margin-top: 24px;
  align-items: center;
  font-size: 18px;
  line-height: ${p => p.theme.lineHeights.secondary};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.normal};
  text-align: center;
  color: ${props => props.theme.colors.white};
  border: 0;
  font-family: 'Open Sans';
  font-style: normal;
  font-size: ${props => props.theme.fontSizes.m};
  border-radius: 5px;
  cursor: pointer;
  background-color: #28a745;

  transition-property: opacity;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);

  :focus,
  :hover {
    opacity: 0.8;
  }
  :active {
  }
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Title = styled.h3`
  font-size: 32px;
  line-height: 48px;
  margin-bottom: 69px;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Placeholder = styled.span`
  position: absolute;
  top: 16px;
  left: 8px;
  color: #808080;
  transition: 0.2s ease all;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Input = styled.input`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  width: 100%;
  height: 56px;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  outline: none;
  padding: 16px 8px;
  ::placeholder {
    opacity: 0;
  }
  :focus-within ~ ${Placeholder}, :not(:placeholder-shown) ~ ${Placeholder} {
    top: -20px;
  }
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Lable = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Validation = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  position: absolute;
  top: 57px;
  left: 8px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: red;
  width: 74%;
  animation: show 1000ms cubic-bezier(0.43, 0.21, 0, 1.03);
  animation-iteration-count: revert-layer;
  span {
    width: 100%;
  }
  svg {
    height: 20px;
    width: 20px;
  }
`;
