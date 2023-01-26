import ListTitel from 'components/ListTitel';
import TrendingCard from 'components/TrendingCard';
import {
  Button,
  Item,
  List,
  WrapperButton,
  WrapperTitel,
} from './TrendingMovies.styles';
import { data } from './dataImg.js';
import poster1 from '../../images/TrendingMovies/1.png';
import poster3 from '../../images/TrendingMovies/3.png';
import poster2 from '../../images/TrendingMovies/2.png';
import poster4 from '../../images/TrendingMovies/4.png';
import poster5 from '../../images/TrendingMovies/5.png';
import poster6 from '../../images/TrendingMovies/6.png';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const TrendingMovies = ({ children }) => {
  const [show, setShow] = useState(true);

  const posterArrey = [poster1, poster2, poster3, poster4, poster5, poster6];
  data.map((item, i) => (item.image = posterArrey[i]));

  return (
    <>
      <WrapperTitel onClick={() => setShow(!show)} id="movies">
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
          <WrapperButton>
            <Button>See more</Button>
          </WrapperButton>
        </>
      ) : null}
    </>
  );
};

export default TrendingMovies;
