import styled from 'styled-components';
export const WrapperTitel = styled.div`
  margin-bottom: 40px;
  &#movies {
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

export const WrapperButton = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 70px;
`;
export const Button = styled.button`
  display: flex;
  gap: 15px;
  align-items: center;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  padding: 15px 30px;
  border: 0;
  box-shadow: 0px 4px 50px rgba(50, 108, 255, 0.5);
  border-radius: 100px;
  cursor: pointer;
  background-image: linear-gradient(316.53deg, #26fff2 13.2%, #326cff 71.54%);

  transition-property: box-shadow;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);
  :focus,
  :hover {
    background-image: linear-gradient(316.53deg, #326cff 13.2%, #26fff2 71.54%);
    box-shadow: 0px 3px 20px 1px #26fff2;
  }
  :active {
    transition: 100ms cubic-bezier(0.43, 0.21, 0, 1.03);
    transform: translateY(2px);
  }
`;
