import React from 'react';
import { Container } from '../../page/HomePage/HomePage.styled';
import AppBar from '../AppBar';
import Logo from '../Logo/Logo';

import { HeaderWrapper, Wrapper } from './Header.styled.js';

const Header = () => {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  // console.log(scroll);
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrapper scroll={scroll}>
      <Container>
        <Wrapper>
          <Logo />
          <AppBar />
        </Wrapper>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
