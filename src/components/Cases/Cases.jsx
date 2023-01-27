import { imgData } from './ImgData';
import {
  // Img,
  // ListItem,
  Preview,
  Text,
  Title,
  Wrapper,
  WrapperContent,
  Img,
  PhotoProviderPort,
  ImgBd,
} from './Cases.styled';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useMediaQuery } from 'react-responsive';

const Cases = () => {
  const useIsMobile = () => useMediaQuery({ query: '(max-width:767px)' });
  const useIsTablet = () =>
    useMediaQuery({ query: '(min-width: 768px) and (max-width: 1359px)' });
  const useIsDesktop = () => useMediaQuery({ query: '(min-width:1360px)' });
  return (
    <>
      <Wrapper>
        <WrapperContent>
          <Preview>This is what we do</Preview>
          <Title>Business Cases</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            sapiente!
          </Text>
        </WrapperContent>
        <div>
          <PhotoProvider maskOpacity={0.5} speed={() => 800}
  easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
>
            <PhotoProviderPort
            >
              {useIsMobile() &&
                imgData.map(
                  ({ index, imgSm1x, imgSm2x, imgWeb1x, imgWeb2x }) => (
                    <PhotoView key={index} src={imgSm2x}>
                      <picture>
                        <source
                          type="image/jpeg"
                          srcSet={`
                    ${imgSm1x} 1x,
                    ${imgSm2x} 2x
                  `}
                        />
                        <img src={imgSm1x} alt="" />
                        {/* {index <= 6 ?  : undefined} */}
                      </picture>
                    </PhotoView>
                  )
                )}
              {useIsTablet() &&
                imgData.map(
                  ({
                    index,
                    imgWeb1x,
                    imgWeb2x,
                    imgMd1x,
                    imgMd2x,
                    
                  }) => (
                    <PhotoView key={index} src={imgMd2x}>
                      <picture>
                        <source
                          type="image/jpeg"
                          srcSet={`
                    ${imgMd1x} 1x,
                    ${imgMd2x} 2x
                  `}
                        />
                      {index <= 6 ? <img src={imgMd1x} alt="" /> : undefined}

                      </picture>
                    </PhotoView>
                  )
                )}
              {useIsDesktop() &&
                imgData.map(
                  ({ index, imgWeb1x, imgWeb2x, imgLg1x, imgLg2x }) => (
                    
                    <PhotoView key={index} src={imgLg2x}>
                      
                        <picture>
                          <source
                            srcset={`
                    ${imgWeb1x} 1x,
                    ${imgWeb2x} 2x
                  `}
                            type="image/webp"
                          />
                          <source
                            type="image/jpeg"
                            srcSet={`
                    ${imgLg1x} 1x,
                    ${imgLg2x} 2x
                  `}
                          />
                         {index <= 6 ? <img src={imgLg1x} alt="" /> : undefined}
                        </picture>
                      
                    </PhotoView>
                  )
                )}
            </PhotoProviderPort>
          </PhotoProvider>
        </div>
      </Wrapper>
      <div className="slide-container"></div>
    </>
  );
};

export default Cases;
