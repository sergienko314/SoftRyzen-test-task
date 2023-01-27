import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import {
  Container,
  Main,
  SectionBloge,
  SectionBlogeBlue,
  SectionCases,
  SectionCollbackForm,
  SectionFooter,
  SectionHero,
} from './HomePage.styled';
import Blog from '../../components/Blog';
import BlogBlue from '../../components/BlogBlue';
import Cases from '../../components/Cases';
import OurTeam from '../../components/OurTeam';
import CollbackForm from '../../components/CollbackForm';
import Footer from '../../components/Footer';
const HomePage = () => {
  return (
    <>
      <Header />
      <SectionHero id="home">
        <Hero />
      </SectionHero>
      <Container>
        <Main>
          <SectionBloge id="about">
            <Blog />
          </SectionBloge>
          <SectionCases id="cases">
            <Cases />
          </SectionCases>
          <SectionBlogeBlue id="blog">
            <BlogBlue />
          </SectionBlogeBlue>
          <OurTeam />
          <SectionCollbackForm>
            <CollbackForm />
          </SectionCollbackForm>
        </Main>
        <SectionFooter>
          <Footer />
        </SectionFooter>
      </Container>
    </>
  );
};

export default HomePage;
