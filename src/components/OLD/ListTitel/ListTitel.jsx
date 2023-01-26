import {
  CgChevronRightStyle,
  DivDecoretion,
  DivTitle,
  MainTitle,
} from './ListTitel.stuled';

const ListTitel = ({ children }) => {
  return (
    <DivTitle>
      <DivDecoretion></DivDecoretion>

      <MainTitle>
        {children}
        <CgChevronRightStyle viewBox="0 0 20 20" />
      </MainTitle>
    </DivTitle>
  );
};
export default ListTitel;
