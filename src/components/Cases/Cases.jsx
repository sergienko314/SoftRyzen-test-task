import { imgData } from './ImgData';
import {
  Preview,
  Text,
  Title,
  Wrapper,
  WrapperContent,
  Img,
  ListItem,
  Item
} from './Cases.styled';

// import 'react-photo-view/dist/react-photo-view.css';
import { useMediaQuery } from 'react-responsive';
import { Container } from '../../page/HomePage/HomePage.styled';
import { useCallback, useState } from 'react';
import ReactSimpleImage from './ReactSimpleImage/ReactSimpleImageViewer';

const Cases = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = useCallback(index => {
    setCurrentImage(index);
    console.log("index", index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };


  const useIsMobile = () => useMediaQuery({ query: '(max-width:767px)' });
  const useIsTablet = () =>
    useMediaQuery({ query: '(min-width: 768px) and (max-width: 1359px)' });
  const useIsDesktop = () => useMediaQuery({ query: '(min-width:1360px)' });
  return (<>
    <Wrapper currentImage={currentImage}>
      <Container> <WrapperContent>
        <Preview>This is what we do</Preview>
        <Title>Business Cases</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </Text>
      </WrapperContent>
        <div>
          <ListItem>
            {useIsMobile() &&
              imgData.map(({ imgSm1x, imgSm2x, imgWeb2x, imgWeb1x }, index) => (
                <Item key={index}>
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
                      srcSet={`
                    ${imgSm1x} 1x,
                    ${imgSm2x} 2x
                  `}
                    />
                    <Img
                      src={imgSm1x}
                      onClick={() => openImageViewer(index)}
                      width="300"
                      key={index}
                      alt=""
                    />
                  </picture>
                </Item>
              ))}
            {useIsMobile() && isViewerOpen && (
              <ReactSimpleImage
                src={imgData}
                currentIndex={currentImage}
                disableScroll={true}
                closeOnClickOutside={false}
                onClose={closeImageViewer}
              />
            )}
            {useIsTablet() &&
              imgData.map(({ imgSm1x, imgSm2x, imgWeb2x, imgWeb1x }, index) => (
                <Item key={index}>
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
                      srcSet={`
                    ${imgSm1x} 1x,
                    ${imgSm2x} 2x
                  `}
                    />
                    <Img
                      src={imgSm1x}
                      onClick={() => openImageViewer(index)}
                      width="300"
                      key={index}
                      alt=""
                    />
                  </picture>
                </Item>
              ))}
            {useIsTablet() && isViewerOpen && (
              <ReactSimpleImage
                src={imgData}
                currentIndex={currentImage}
                disableScroll={true}
                closeOnClickOutside={false}
                onClose={closeImageViewer}
              />
            )}
            {useIsDesktop() &&
              imgData.map(({ imgSm1x, imgSm2x, imgWeb2x, imgWeb1x }, index) => (
                <Item key={index}>
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
                      srcSet={`
                    ${imgSm1x} 1x,
                    ${imgSm2x} 2x
                  `}
                    />
                    <Img
                      src={imgSm1x}
                      onClick={() => openImageViewer(index)}
                      width="300"
                      key={index}
                      alt=""
                    />
                  </picture>
                </Item>
              ))}
            {useIsDesktop() && isViewerOpen && (
              <ReactSimpleImage
                src={imgData}
                currentIndex={currentImage}
                disableScroll={true}
                closeOnClickOutside={false}
                onClose={closeImageViewer}
              />
            )}
          </ListItem>
        </div></Container>
    </Wrapper>
  </>
  );
};

export default Cases;
