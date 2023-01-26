import styled from 'styled-components';
import formSmX1 from '../../images/form/form-sm@-x1.png';
import formSmX2 from '../../images/form/form-sm@-x2.png';
export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
`;

export const Img = styled.div`
  background-image: url(${formSmX1});
  width: 320px;
  height: 220px;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: 51px;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: url(${formSmX2});
  }

  @media screen and (min-width: 768px) {
    background: url(${formSmX2});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${formSmX2});
    }
  }

  @media screen and (min-width: 1200px) {
    background: url(${formSmX2});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${formSmX2});
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 25px;
`;

export const Button = styled.button`
  margin-top: 8px;
  height: 57px;
  width: 155px;
  border: none;
  background: #28a745;
  border-radius: 5px;
`;

export const Title = styled.h3`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  margin-bottom: 69px;
`;

export const Placeholder = styled.span`
  position: absolute;
  top: 16px;
  left: 8px;
  transition: 0.2s ease all;
`;

export const Input = styled.input`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;

  width: 100%;
  height: 56px;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  outline: none;
  padding: 16px 8px;
  ::placeholder {
    opacity: 0;
  }
  :focus-within ~ ${Placeholder}, :not(:placeholder-shown) ~ ${Placeholder} {
    top: -20px;
  }
`;

export const Lable = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Validation = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  position: absolute;
  top: 57px;
  left: 8px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: red;
  width: 74%;
  animation: show 1000ms cubic-bezier(0.43, 0.21, 0, 1.03);
  animation-iteration-count: revert-layer;
  span {
    width: 100%;
  }
  svg {
    height: 20px;
    width: 20px;
  }
`;
