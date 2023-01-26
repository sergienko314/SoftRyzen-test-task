import { SpanOne, SpanTwo, SpanZero, Wrapper } from './Logo.styled';
import logo from '../../images/header/sprite.svg';

const Logo = ({ backgroundColor }) => {
  return (
    <Wrapper>
      <SpanZero>
        <svg>
          <use href={`${logo}#logo`}></use>
        </svg>
      </SpanZero>
      <SpanOne>Finance</SpanOne>
      <SpanTwo>Ledger</SpanTwo>
    </Wrapper>
  );
};
export default Logo;
