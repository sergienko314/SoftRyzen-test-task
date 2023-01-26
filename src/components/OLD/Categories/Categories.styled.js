import styled from 'styled-components';

export const MainDiv = styled.section`
  margin-bottom: 70px;
`;

export const WrapperTitel = styled.div`
  margin-bottom: 40px;
  &#series {
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
  gap: 26px;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 45px 0;
  height: 108px;
  width: 340px;
  border-radius: 20px;
  background: ${props => props.backgroundColor};
  transition: 760ms cubic-bezier(0.43, 0.21, 0, 1.03);
  cursor: pointer;

  svg {
    width: 80px;
    height: 80px;
    fill: #ffffff;
    use {
    }
  }
  :active {
    transition: 100ms cubic-bezier(0.43, 0.21, 0, 1.03);
    transform: translateY(2px);
  }
  :focus,
  :hover {
    box-shadow: 0px 3px 20px 1px #3fffff;
    svg {
      transition: 760ms cubic-bezier(0.43, 0.21, 0, 1.03);
      width: 82px;
      height: 82px;
      fill: #ffffff;
    }
  }
`;

export const Title = styled.h2`
  font-family: 'Mulish';
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 20px;
`;
