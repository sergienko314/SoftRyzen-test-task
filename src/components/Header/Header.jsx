import React from 'react';
import AppBar from '../AppBar';
import Logo from '../Logo/Logo';
// import AppBarAuth from 'components/AppBarAuth/AppBarAuth.jsx';
// import Logo from 'components/Logo/Logo.jsx';
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
      <Wrapper>
        <Logo />
        <AppBar />
      </Wrapper>
    </HeaderWrapper>
  );
};

export default Header;
