import {
  FerstBaner,
  FerstBanerImg,
  FerstBanerContent,
  FerstBanerTitle,
  Img2021,
  Divperimg,
} from './Baner.styled';

const Baner = () => {
  return (
    <>
      <FerstBaner>
        <Divperimg><FerstBanerImg></FerstBanerImg></Divperimg>
       
        <FerstBanerContent>
          <Img2021></Img2021>
          <FerstBanerTitle>Coming Soon...</FerstBanerTitle>
        </FerstBanerContent>
      </FerstBaner>
    </>
  );
};

export default Baner;
