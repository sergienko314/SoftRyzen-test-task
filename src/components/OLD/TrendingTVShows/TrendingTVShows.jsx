import ListTitel from 'components/ListTitel';
import TrendingCard from '../../components/TrendingCard';
import { List, Item, WrapperTitel, MainDiv } from './TrendingTVShows.styled';
import { data } from './dataImg.js';
import poster1 from '../../images/TrendingTVShows/1.png';
import poster2 from '../../images/TrendingTVShows/2.png';
import poster3 from '../../images/TrendingTVShows/3.png';
import poster4 from '../../images/TrendingTVShows/4.png';
import poster5 from '../../images/TrendingTVShows/5.png';
import poster6 from '../../images/TrendingTVShows/6.png';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const TrendingTVShows = ({ children }) => {
  const posterArrey = [poster1, poster2, poster3, poster4, poster5, poster6];
  data.map((item, i) => (item.image = posterArrey[i]));

  const [show, setShow] = useState(true);

  return (
    <MainDiv>
      <WrapperTitel onClick={() => setShow(!show)} id="tv">
        <ListTitel>{children}</ListTitel>
      </WrapperTitel>
      {show ? (
        <>
          <List>
            {data.map(({ image, alt }) => {
              return (
                <Item key={uuidv4()}>
                  <TrendingCard img={image} alt={alt} />
                </Item>
              );
            })}
          </List>
        </>
      ) : null}
    </MainDiv>
  );
};
export default TrendingTVShows;
