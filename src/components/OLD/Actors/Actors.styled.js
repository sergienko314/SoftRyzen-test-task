import styled from 'styled-components';

export const MainDiv = styled.div``;

export const WrapperTitel = styled.div`
  margin-bottom: 40px;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  gap: 60px;
`;

export const Item = styled.li`
  display: flex;
  gap: 20px;
  flex-direction: column;
  cursor: pointer;
  opacity: 1;
  box-shadow: 0;
  transition-property: box-shadow, opacity;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
`;
export const Title = styled.div`
  color: #ffffff;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
`;
export const Img = styled.img`
  width: 190px;
  height: 190px;
  border-radius: 100px;
  box-shadow: 0;
  transition-property: box-shadow;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
  &:hover,
  &:focus {
    box-shadow: 0px 3px 20px 1px #ffffff;
  }
`;
