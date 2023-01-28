import { imegesData } from './ImegesData';
import {
  Div,
  Img,
  Item,
  ItemImg,
  List,
  ListItem,
  Name,
  Position,
  Preview,
  Text,
  Title,
  Wrapper,
  WrapperContact,
  WrapperContent,
} from './OurTeam.styled';
import icons from '../../images/sprite.svg';
import { Container } from '../../page/HomePage/HomePage.styled';

const dataSvg = ['#facebook', '#twitter', '#youtube', '#in'];

const OurTeam = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <WrapperContent>
            <Preview>Who we are</Preview>
            <Title>Our Professional Team</Title>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, sapiente!
            </Text>
          </WrapperContent>
          <ListItem>
            {imegesData.map(
              ({
                name,
                position,
                imgSm1x,
                imgSm2x,
                imgWeb1x,
                imgWeb2x,
                imgMd1x,
                imgMd2x,
                imglg1x,
                imglg2x,
              }) => (
                <ItemImg key={name}>
                  <picture>
                    <source
                      srcSet={`
                    ${imgWeb1x} 1x,
                    ${imgWeb2x} 2x
                  `}
                      type="image/webp"
                    />
                    <source
                      type="image/jpeg"
                      media="screen and (min-width: 1360px)"
                      srcSet={`
                    ${imglg1x} 1x,
                    ${imglg2x} 2x
                  `}
                    />

                    <source
                      type="image/jpeg"
                      media="screen and (min-width: 768px)"
                      srcSet={`
                    ${imgMd1x} 1x,
                    ${imgMd2x} 2x
                  `}
                    />
                    <source
                      type="image/jpeg"
                      media="screen and (max-width: 767px)"
                      srcSet={`
                    ${imgSm1x} 1x,
                    ${imgSm2x} 2x
                  `}
                    />
                    <Img
                      type="image/web"
                      srcSet={`
            ${imgWeb1x} 2x,
            ${imgWeb2x} 1x,
            `}
                      src={imgWeb1x}
                      alt="фото"
                    />
                  </picture>
                  <Div>
                    <List>
                      {dataSvg.map(image => (
                        <Item key={image}>
                          <svg>
                            <use href={`${icons}${image}`}></use>
                          </svg>
                        </Item>
                      ))}
                    </List>
                  </Div>
                  <WrapperContact>
                    <Name>{name}</Name>
                    <Position>{position}</Position>
                  </WrapperContact>
                </ItemImg>
              )
            )}
          </ListItem>
        </Container>
      </Wrapper>
    </>
  );
};

export default OurTeam;
