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
} from './BlogBlue.styles';
import peopleXXX1x from '../../images/blogBlue/RectangleXXX1x.jpg';
import peopleXXX2x from '../../images/blogBlue/RectangleXXX2x.jpg';
import peopleLLL1x from '../../images/blogBlue/RectangleLLL1x.jpg';
import peopleLLL2x from '../../images/blogBlue/RectangleLLL2x.jpg';
import peopleMMM1x from '../../images/blogBlue/RectangleMMM1x.jpg';
import peopleMMM2x from '../../images/blogBlue/RectangleMMM2x.jpg';
import peopleWeb1x from '../../images/blogBlue/blog.webp';
import peopleWeb2x from '../../images/blogBlue/blog@2x.webp';

const BlogBlue = () => {
  return (
    <>
      <Wrapper>
        <Div>
          <picture>
            <source
              type="image/jpeg"
              media="screen and (min-width: 1360px)"
              srcSet={`
                    ${peopleXXX1x} 1x,
                    ${peopleXXX2x} 2x
                  `}
            />
            <source
              type="image/jpeg"
              media="screen and (min-width: 769px)"
              srcSet={`
                    ${peopleXXX1x} 1x,
                    ${peopleXXX2x} 2x
                  `}
            />
            <source
              type="image/jpeg"
              media="screen and (min-width: 768px)"
              srcSet={`
                    ${peopleLLL1x} 1x,
                    ${peopleLLL2x} 2x
                  `}
            />
            <source
              type="image/jpeg"
              media="screen and (max-width: 767px)"
              srcSet={`
                    ${peopleMMM1x} 1x,
                    ${peopleMMM2x} 2x
                  `}
            />
            <Img
              type="image/web"
              srcSet={`
            ${peopleWeb2x} 2x,
            ${peopleWeb1x} 1x,
            `}
              src={peopleWeb1x}
              alt="фото"
            />
          </picture>
        </Div>
        <WrapperContainer>
          <WrapperContent>
            <Preview>April 16 2020</Preview>
            <Title>Blog Post One</Title>
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

export default BlogBlue;
