import {
  Blur,
  Button,
  MainDiv,
  Title,
  Div,
  Filter,
} from './RegistrationBaner.styled';

const RegistrationBaner = () => {
  return (
    <MainDiv>
      <Blur></Blur>
      <Filter></Filter>
      <Div>
        <Title>
          Are You New Here ?<br />
          Don’t Wait, Register Now.
        </Title>
        <Button>Register Now</Button>
      </Div>
    </MainDiv>
  );
};

export default RegistrationBaner;
