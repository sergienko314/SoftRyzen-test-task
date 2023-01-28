import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
     font-family: ${props => props.theme.fonts.main};
     font-weight: ${props => props.theme.fontWeights.normal};
     letter-spacing: ${props => props.theme.letterSpacing.normal};
     line-height: ${p => p.theme.lineHeights.main};
     color: ${props => props.theme.colors.main};
     margin: ${props => props.theme.space[0]}px;
     padding: ${props => props.theme.space[0]}px;
    background-color: ${props => props.theme.colors.background.white};
    margin-left:auto ;
    margin-right:auto ;

    ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
    max-width: 1360px;
  }
   
  }
  ul, li, h1, h2, h3, h4, p, button, img  {
     padding: ${props => props.theme.space[0]}px;
     margin: ${props => props.theme.space[0]}px;
  cursor: default;

  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button{
     min-width: 155px;
     padding: 16px 32px;
  }
  img {padding:0;
    display: block;
     /* height: auto;

    object-fit: cover;
    object-position: center; */
  }
`;

export default GlobalStyle;
