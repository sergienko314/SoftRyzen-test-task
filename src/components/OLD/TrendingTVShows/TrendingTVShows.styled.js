import styled from 'styled-components';

export const MainDiv = styled.div``;

export const WrapperTitel = styled.div`
  margin-bottom: 40px;
  cursor: pointer;
  &#tv {
    padding-top: 100px;
    margin-top: -100px;
    -webkit-background-clip: content-box;
    background-clip: content-box;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 42px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
