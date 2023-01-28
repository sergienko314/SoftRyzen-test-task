import styled from 'styled-components';

export const Container = styled.div`
  /* margin-left: auto;
  margin-right: auto; */
  padding-left: 20px;
  padding-right: 20px;
  /* width: 100%; */

  ${props => props.theme.breakpoints.tab} {
    padding-left: 32px;
    padding-right: 32px;
  }
  ${props => props.theme.breakpoints.desc} {
    padding-left: 28px;
    padding-right: 28px;
    width: 1360px;
  }
`;

export const Main = styled.main`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SectionHero = styled.section`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SectionBloge = styled.section`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SectionCases = styled.section`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SectionBlogeBlue = styled.section`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SectionCollbackForm = styled.section`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const SectionFooter = styled.section`
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

// export const SectionRegistrationBaner = styled.section`
//   margin-top: 121px;
//   margin-bottom: 121px;
// `;
// export const SectionFooter = styled.footer``;
