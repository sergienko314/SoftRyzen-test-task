import {
  ItemNav,
  LinkItemNav,
  ListNav,
  NavStyled,
  Svg,
  WrapperImg,
} from './AppBarAuth.styled';
import search from '../../images/appBarAuth/search.svg';
import bell from '../../images/appBarAuth/bell.svg';
import auth from '../../images/appBarAuth/auth.svg';

const navItems = [
  { href: '/search', text: 'search', icon: search },
  { href: '/bell', text: 'bell', icon: bell },
  { href: '/auth', text: 'auth', icon: auth },
];

const AppBarAuth = () => {
  return (
    <>
      <NavStyled>
        <ListNav>
          {navItems.map(({ href, icon, text }) => (
            <ItemNav key={href}>
              <LinkItemNav to={href}>
                <WrapperImg>
                  <Svg src={icon} alt={text} />
                </WrapperImg>
              </LinkItemNav>
            </ItemNav>
          ))}
        </ListNav>
      </NavStyled>
    </>
  );
};

export default AppBarAuth;
