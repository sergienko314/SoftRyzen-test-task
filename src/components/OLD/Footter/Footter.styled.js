import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  height: 290px;
  padding-left: 165px;
  padding-right: 165px;
  background: #101012;
  margin-left: -80px;
  margin-right: -80px;
`;
export const Div = styled.div`
  gap: 84px;
  margin-top: 83px;
  margin-bottom: 69px;
  display: flex;
`;

export const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 52px;
`;
export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  gap: 17px;
`;
export const Link = styled.li`
  /* width: 100%; */
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: start;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #c2c2c2;
`;
