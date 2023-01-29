import {
  Button,
  Div,
  Img,
  Preview,
  Text,
  Title,
  Wrapper,
  WrapperContainer,
  WrapperContent,
} from './Blog.styles';
import peopleLg1x from '../../images/blog/RectangleXXX1x.jpg';
import peopleLg2x from '../../images/blog/RectangleXXX2x.jpg';
import peopleMd1x from '../../images/blog/RectangleLLL1x.jpg';
import peopleMd2x from '../../images/blog/RectangleLLL2x.jpg';
import peopleSm1x from '../../images/blog/RectangleMMM1x.jpg';
import peopleSm2x from '../../images/blog/RectangleMMM2x.jpg';
import peopleWeb1x from '../../images/blog/people.webp';
import peopleWeb2x from '../../images/blog/people@2x.webp';

const Blog = () => {
  return (
    <>
      <Wrapper>
        <Div>
          <picture>
            <source
              type="image/jpeg"
              media="screen and (min-width: 1360px)"
              srcSet={`
                    ${peopleLg1x} 1x,
                    ${peopleLg2x} 2x
                  `}
            />
            <source
              type="image/jpeg"
              media="screen and (min-width: 768px)"
              srcSet={`
                    ${peopleMd1x} 1x,
                    ${peopleMd2x} 2x
                  `}
            />
            <source
              type="image/jpeg"
              sizes='contain'
              media="screen and (max-width: 767px)"
              srcSet={`
                    ${peopleSm1x} 1x,
                    ${peopleSm2x} 2x
                  `}
            />
            <Img
              type="image/Web"
              srcSet={`
            ${peopleWeb1x} 2x,
            ${peopleWeb2x} 1x,
            `}
              src={peopleWeb2x}
              alt="фото"
            />
          </picture>
        </Div>

        <WrapperContainer>
          <WrapperContent>
            <Preview>What you are looking for</Preview>
            <Title>We provide bespoke solutions</Title>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate, ipsum dignissimos quae laudantium asperiores nam
              aliquid impedit harum illum dolore explicabo ab dolores itaque
              rerum temporibus doloribus iste maiores deleniti?
            </Text>
            <Button>Read More</Button>
          </WrapperContent>
        </WrapperContainer>
      </Wrapper>
    </>
  );
};

export default Blog;
