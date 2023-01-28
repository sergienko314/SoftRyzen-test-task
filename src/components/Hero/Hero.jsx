import { Button, Text, Title, Wrapper, Сontext } from './Hero.styled';
import button from '../../images/sprite.svg';
import { Container } from '../../page/HomePage/HomePage.styled';

const Hero = () => {
  return (
    <>
      <Wrapper>
        <Container><Сontext>
          <Title>The Sky Is The Limit</Title>

          <Text>We provide world class financial assistance</Text>

          <Button>
            <svg width="9px" height="18px">
              <use href={`${button}#arrow`}></use>
            </svg>
            Read More
          </Button>
        </Сontext></Container>
        
      </Wrapper>
    </>
  );
};

export default Hero;
