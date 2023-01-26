import Logo from 'components/Logo';
import { data } from './dataLinks';
import { MainDiv, Div, List, Link, ListsContainer } from './Footter.styled';
import { v4 as uuidv4 } from 'uuid';

const Footter = () => {
  return (
    <MainDiv>
      <Div>
        <Logo backgroundColor={'#101012'} />
        <ListsContainer>
          {data.map(i => (
            <List key={uuidv4()}>
              {i.map(({ linkTitle }) => (
                <Link key={uuidv4()}>{linkTitle}</Link>
              ))}
            </List>
          ))}
        </ListsContainer>
      </Div>
    </MainDiv>
  );
};

export default Footter;

// key={uuidv4()}

// <ul>
//   {data.map(i => (
//     <li key={uuidv4()}>
//       <ul>
//         {i.map(({ linkTitle }) => (
//           <Link key={uuidv4()}>{linkTitle}</Link>
//         ))}
//       </ul>
//     </li>
//   ))}
// </ul>;
