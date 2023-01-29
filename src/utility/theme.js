export const theme = {
  colors: {
    black: '#111111',
    white: '#FFFFFF',
    accent: '#28A745',
    main: '#333333',
    blue: '#0284D0',

    background: {
      white: '#FFFFFF',
      main: '#FDF7F2',
      backdrop: '',
      modalInput: '',
      popup: '',
      content: '#333333',
      accent: '#28A745',
      blue: '#0284D0',
    },
  },
  space: [0, 8, 12, 16, 20, 32, 40, 50, 80, 110],
  fonts: {
    main: 'Open Sans, sans-serif',
    secondary: '',
  },
  fontFamily: {
    title: 'Poppins',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    ms: '18px',
    ml: '20px',
    l: '24px',
    xl: '26px',
    xlx: '32px',
    xll: '40px',
    xxl: '48px',
    titleSmall: '32px',
    titleBig: '68px',
  },
  fontWeights: {
    normal: 400,
    semiBold: 600,
    bold: 700,
  },
  lineHeights: {
    validationHover: 1.23,
    validation: 1.33,
    secondary: 1.38,
    main: 1.35,
    title: 1.37,
    heroText: 1.23,
    logo: 1.37,
  },
  letterSpacing: {
    normal: '0.03em',
    logo: '0.07em',
  },
  borders: {
    none: 'none',
    normal: '2px solid #F59256',
    input: '1px solid rgba(245, 146, 86, 0.5)',
  },
  radii: {
    none: '0',
    // sm: '10px',
    md: '20px',
    lg: '40px',
    round: '50%',
  },
  breakpoints: {
    mob: '',
    tab: '@media screen and (min-width: 768px)',
    desc: '@media screen and (min-width: 1360px)',
    onlyMob: '@media screen and (max-width: 767px)',
    onlyTab: '@media screen and (min-width: 768px) and (max-width: 1359px)',
  },
  retina: {
    double:
      '@media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)',
  },
};
