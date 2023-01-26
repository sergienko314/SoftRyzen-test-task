import {
  Button,
  Img,
  Preview,
  Text,
  Title,
  Wrapper,
  WrapperContent,
} from './Blog.styles';
import peopleXXX1x from '../../images/blog/RectangleXXX1x.jpg';
import peopleXXX2x from '../../images/blog/RectangleXXX2x.jpg';
import peopleLLL1x from '../../images/blog/RectangleLLL1x.jpg';
import peopleLLL2x from '../../images/blog/RectangleLLL2x.jpg';
import peopleMMM1x from '../../images/blog/RectangleMMM1x.jpg';
import peopleMMM2x from '../../images/blog/RectangleMMM2x.jpg';
import peopleWeb1x from '../../images/blog/people.webp';
import peopleWeb2x from '../../images/blog/people@2x.webp';

const Blog = () => {
  return (
    <>
      <Wrapper>
        <picture>
          <source
            type="image/jpeg"
            media="screen and (min-width: 1360px)"
            srcset={`
                    ${peopleXXX1x} 1x,
                    ${peopleXXX2x} 2x
                  `}
          />
          <source
            type="image/jpeg"
            media="screen and (min-width: 768px)"
            srcset={`
                    ${peopleLLL1x} 1x,
                    ${peopleLLL2x} 2x
                  `}
          />
          <source
            type="image/jpeg"
            media="screen and (max-width: 767px)"
            srcset={`
                    ${peopleMMM1x} 1x,
                    ${peopleMMM2x} 2x
                  `}
          />
          <Img
            type="image/web"
            srcset={`
            ${peopleWeb2x} 2x,
            ${peopleWeb1x} 1x,
            `}
            src={peopleWeb1x}
            alt="фото"
          />
        </picture>
        <WrapperContent>
          <Preview>What you are looking for</Preview>
          <Title>We provide bespoke solutions</Title>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </Text>
          <Button>Read More</Button>
        </WrapperContent>
      </Wrapper>
    </>
  );
};

export default Blog;
