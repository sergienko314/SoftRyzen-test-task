import React from 'react';
import { ItemNav, LinkItemNav, ListNav, NavStyled } from './AppBar.styled';

export const navItems = [
  { href: '#home', text: 'Home', icon: null, name: 'home' },
  { href: '#tv', text: 'About', icon: null, name: 'about' },
  { href: '#movies', text: 'Cases', icon: null, name: 'cases' },
  { href: '#series', text: 'Blog', icon: null, name: 'blog' },
  { href: '#contact', text: 'Contact', icon: null, name: 'contact' },
];

const AppBar = () => {
  return (
    <>
      <NavStyled>
        <ListNav>
          {navItems.map(({ href, text, name }) => (
            <ItemNav key={href}>
              <LinkItemNav
                href={name}
                title={text}
                activeClass="any"
                to={name}
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                {text}
              </LinkItemNav>
            </ItemNav>
          ))}
        </ListNav>
      </NavStyled>
    </>
  );
};

export default AppBar;
