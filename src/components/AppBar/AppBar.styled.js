// import { NavLink } from 'react-router-dom';

import { Link } from 'react-scroll';

import styled from 'styled-components';

export const NavStyled = styled.nav`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const ListNav = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 10px;
  margin-bottom: 22px;
  ${props => props.theme.breakpoints.tab} {
    margin-bottom: 16px;
    margin-bottom: 0;
    gap: 20px;
  }
  ${props => props.theme.breakpoints.desc} {
    gap: 50px;
  }
`;

export const ItemNav = styled.li`
  position: relative;
  display: flex;
  list-style: none;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const LinkItemNav = styled(Link)`
  display: inline-flex;

  align-items: center;

  font-size: ${props => props.theme.fontSizes.m};
  color: ${props => props.theme.colors.white};
  line-height: ${p => p.theme.lineHeights.secondary};
  text-decoration: none;

  /* transition-property: color transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */

  transition-property: opacity;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);

  :focus-visible:not(.active),
  :hover:not(.active) {
    ::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: -10px;

      display: block;

      width: calc(100% + 20px);
      height: 2px;
      background: ${props => props.theme.colors.background.accent};
      border-radius: 50px;
    }
  }
  ${props => props.theme.breakpoints.tab} {
    bottom: -16px;
    font-weight: 400;
    font-size: 18px;

    line-height: 25px;
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
