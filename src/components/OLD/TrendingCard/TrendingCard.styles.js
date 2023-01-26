import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 205px;
  height: 309px;
  /* background-color: red; */
  border-radius: 20px;
`;

export const Img = styled.img`
  border-radius: 20px;
  transition-property: box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
  &:hover {
    box-shadow: 0px 0px 20px rgba(44, 176, 249, 0.5);
  }
`;
