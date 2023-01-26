import { useState } from 'react';
import ListTitel from '../../components/ListTitel';
import { List, MainDiv, Item, Title, WrapperTitel } from './Categories.styled';
import { data } from './dataImage';
import icons from './svg/symbol-defs.svg';

const Categories = ({ children }) => {
  const [show, setShow] = useState(true);

  return (
    <MainDiv>
      <WrapperTitel onClick={() => setShow(!show)} id="series">
        <ListTitel>{children}</ListTitel>
      </WrapperTitel>
      {show ? (
        <List>
          {data.map(({ image, bgColor, title }) => {
            return (
              <Item key={title} backgroundColor={bgColor}>
                <svg>
                  <use href={`${icons}${image}`}></use>
                </svg>
                <Title>{title}</Title>
              </Item>
            );
          })}
        </List>
      ) : null}
    </MainDiv>
  );
};

export default Categories;
