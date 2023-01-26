import styled from 'styled-components';
import heroM1 from '../../images/hero/RectangleMMM1x.png';
import heroM2 from '../../images/hero/RectangleMMM2x.png';
import heroL1 from '../../images/hero/RectangleLLL1x.png';
import heroL2 from '../../images/hero/RectangleLLL2x.png';
import heroX1 from '../../images/hero/RectangleXXX1x.png';
import heroX2 from '../../images/hero/RectangleXXX2x.png';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding-left: -20px; */

  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url(${heroM1});
  ${props => props.theme.retina.double} {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ),
      url(${heroM2});
  }
  padding-top: 100px;
  height: 533px;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -116px;

  /* &#home {
    padding-top: 100px;
    margin-top: -100px;

    -webkit-background-clip: content-box;
    background-clip: content-box;
  } */
  ${props => props.theme.breakpoints.tab} {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ),
      url(${heroL1});
    ${props => props.theme.retina.double} {
      background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)
        ),
        url(${heroL2});
    }
  }
  ${props => props.theme.breakpoints.desc} {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ),
      url(${heroX1});
    ${props => props.theme.retina.double} {
      background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.4),
          rgba(0, 0, 0, 0.4)
        ),
        url(${heroX2});
    }
  }
`;
export const Сontext = styled.div`
  margin-left: auto;
  margin-right: auto;

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Title = styled.h1`
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.xll};
  color: ${props => props.theme.colors.white};
  text-align: center;
  margin-top: 62px;
  width: 240px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.heroText};

  text-align: center;

  margin-top: 16px;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Button = styled.button`
  display: flex;
  gap: 8px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  align-items: center;
  font-size: 18px;
  line-height: ${p => p.theme.lineHeights.secondary};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.normal};
  text-align: center;
  color: ${props => props.theme.colors.white};
  padding: 16px 32px;
  border: 0;
  font-family: 'Open Sans';
  font-style: normal;
  font-size: ${props => props.theme.fontSizes.m};
  border-radius: 5px;
  cursor: pointer;
  background-color: #28a745;

  transition-property: opacity;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.43, 0.21, 0, 1.03);

  :focus,
  :hover {
    opacity: 0.8;
  }
  :active {
  }
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;
