import styled from 'styled-components';
import ferstBanerImg from '../../images/baner/ferstBanerImg.jpg';
import imgYear from '../../images/baner/img2021.svg';

export const FerstBaner = styled.div`
  display: flex;
  width: 1440px;
  height: 341px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(87.02deg, #0d1a73 29.67%, #000000 70.52%);
  box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.1);
  border-radius: 20px;
`;

export const FerstBanerContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FerstBanerImg = styled.div`
  display: block;
  background-image: url(${ferstBanerImg});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Divperimg = styled.div`
  width: 100%;
  height: 100%;

  margin-bottom: 33px;
`;

export const FerstBanerTitle = styled.p`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 20px;
  text-transform: capitalize;
  margin: 0;
  margin-top: 33px;
  color: #ffffff;
`;
export const Img2021 = styled.div`
  width: 294px;
  height: 156px;
  background-image: url(${imgYear});
  background-size: contain;
  background-repeat: no-repeat;
`;
