import { Button, Text, Title, Wrapper, Сontext } from './Hero.styled';
import button from '../../images/sprite.svg';

const Hero = () => {
  return (
    <>
      <Wrapper>
        <Сontext>
          <Title>The Sky Is The Limit</Title>

          <Text>We provide world class financial assistance</Text>

          <Button>
            <svg width="9px" height="18px">
              <use href={`${button}#arrow`}></use>
            </svg>
            Read More
          </Button>
        </Сontext>
      </Wrapper>
    </>
  );
};

export default Hero;
