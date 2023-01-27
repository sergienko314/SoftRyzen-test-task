import { Wrapper, List, Text, Item } from './Footer.styled';
import icons from '../../images/sprite.svg';
const Footer = () => {
  const dataSvg = ['#facebook', '#twitter', '#youtube', '#in'];
  return (
    <Wrapper>
      <List>
        {dataSvg.map(image => (
          <Item key={image}>
            <svg>
              <use href={`${icons}${image}`}></use>
            </svg>
          </Item>
        ))}
      </List>
      <Text>Copyright © 2021 - FinanceLedger</Text>
    </Wrapper>
  );
};

export default Footer;
