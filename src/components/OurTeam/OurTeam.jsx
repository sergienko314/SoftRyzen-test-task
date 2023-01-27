import people1MMM1x from '../../images/team/person1MMMx1.jpg';
import people1MMM2x from '../../images/team/person1MMMx2.jpg';
import people1Web1x from '../../images/team/person1.webp';
import people1Web2x from '../../images/team/person1@2x.webp';
import people1LLL1x from '../../images/team/person1LLLx1.jpg';
import people1LLL2x from '../../images/team/person1LLLx2.jpg';
import people1XXX1x from '../../images/team/person1XXXx1.jpg';
import people1XXX2x from '../../images/team/person1XXXx2.jpg';

import people2MMM1x from '../../images/team/person2MMMx1.jpg';
import people2MMM2x from '../../images/team/person2MMMx2.jpg';
import people2Web1x from '../../images/team/person2.webp';
import people2Web2x from '../../images/team/person2@2x.webp';
import people2LLL1x from '../../images/team/person2LLLx1.jpg';
import people2LLL2x from '../../images/team/person2LLLx2.jpg';
import people2XXX1x from '../../images/team/person3XXXx1.jpg';
import people2XXX2x from '../../images/team/person2XXXx2.jpg';

import people3MMM1x from '../../images/team/person3MMMx1.jpg';
import people3MMM2x from '../../images/team/person3MMMx2.jpg';
import people3Web1x from '../../images/team/person3.webp';
import people3Web2x from '../../images/team/person3@2x.webp';
import people3LLL1x from '../../images/team/person3LLLx1.jpg';
import people3LLL2x from '../../images/team/person3LLLx2.jpg';
import people3XXX1x from '../../images/team/person3XXXx1.jpg';
import people3XXX2x from '../../images/team/person3XXXx2.jpg';

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

const dataSvg = ['#facebook', '#twitter', '#youtube', '#in'];

const OurTeam = () => {
  return (
    <>
      <Wrapper>
        <WrapperContent>
          <Preview>Who we are</Preview>
          <Title>Our Professional Team</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </Text>
        </WrapperContent>
        <div>
          <ListItem>
            <ItemImg>
              <picture>
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 1360px)"
                  srcSet={`
                    ${people1XXX1x} 1x,
                    ${people1XXX2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 768px)"
                  srcSet={`
                    ${people1LLL1x} 1x,
                    ${people1LLL2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (max-width: 767px)"
                  srcSet={`
                    ${people1MMM1x} 1x,
                    ${people1MMM2x} 2x
                  `}
                />
                <Img
                  type="image/web"
                  srcSet={`
            ${people1Web2x} 2x,
            ${people1Web1x} 1x,
            `}
                  src={people1Web1x}
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
                <Name>John Doe</Name>
                <Position>President</Position>
              </WrapperContact>
            </ItemImg>
            <ItemImg>
              <picture>
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 1360px)"
                  srcSet={`
                    ${people2XXX1x} 1x,
                    ${people2XXX2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 768px)"
                  srcSet={`
                    ${people2LLL1x} 1x,
                    ${people2LLL2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (max-width: 767px)"
                  srcSet={`
                    ${people2MMM1x} 1x,
                    ${people2MMM2x} 2x
                  `}
                />
                <Img
                  type="image/web"
                  srcSet={`
            ${people2Web2x} 2x,
            ${people2Web1x} 1x,
            `}
                  src={people2Web1x}
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
                <Name>Jane Doe</Name>
                <Position>Vice President</Position>
              </WrapperContact>
            </ItemImg>
            <ItemImg>
              <picture>
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 1360px)"
                  srcSet={`
                    ${people3XXX1x} 1x,
                    ${people3XXX2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (min-width: 768px)"
                  srcSet={`
                    ${people3LLL1x} 1x,
                    ${people3LLL2x} 2x
                  `}
                />
                <source
                  type="image/jpeg"
                  media="screen and (max-width: 767px)"
                  srcSet={`
                    ${people3MMM1x} 1x,
                    ${people3MMM2x} 2x
                  `}
                />
                <Img
                  type="image/web"
                  srcSet={`
            ${people3Web2x} 2x,
            ${people3Web1x} 1x,
            `}
                  src={people3Web1x}
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
                <Name>Steve Smith</Name>
                <Position>Marketing Head</Position>
              </WrapperContact>
            </ItemImg>
          </ListItem>
        </div>
      </Wrapper>
      {/* <div className="slide-container">
        <Zoom scale={0.4}>
          {images.map((each, index) => (
            <img key={index} style={{ width: '100%' }} src={each} />
          ))}
        </Zoom>
      </div> */}
    </>
  );
};

export default OurTeam;
