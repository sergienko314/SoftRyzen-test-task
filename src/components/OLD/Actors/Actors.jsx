import { Img, Item, List, MainDiv, Title, WrapperTitel } from './Actors.styled';
import { data } from './dataIkons';
import ListTitel from '../../components/ListTitel';
import { useState } from 'react';

const Actors = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <MainDiv>
      <WrapperTitel onClick={() => setShow(!show)}>
        <ListTitel>{children}</ListTitel>
      </WrapperTitel>
      {show ? (
        <List>
          {data.map(({ img, title }) => {
            return (
              <Item key={title}>
                <Img src={img}></Img>
                <Title>{title}</Title>
              </Item>
            );
          })}
        </List>
      ) : null}
    </MainDiv>
  );
};

export default Actors;
