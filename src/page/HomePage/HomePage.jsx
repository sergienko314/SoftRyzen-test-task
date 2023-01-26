// import Categories from 'components/Categories/Categories';
// import RegistrationBaner from 'components/RegistrationBaner.js/RregistrationBaner';
import React from 'react';
import CollbackForm from '../../components/CollbackForm/CollbackForm';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import {
  Container,
  Main,
  // SectionActors,
  // SectionBaner,
  // SectionCategories,
  // SectionFooter,
  SectionHero,
  // SectionRegistrationBaner,
  // SectionTrendingMovies,
  // SectionTrendingTVShows,
} from './HomePage.styled';
// import Actors from 'components/Actors/Actors';
// import Baner from 'components/Baner/Baner';
// import Footter from 'components/Footter/Footter';
// import TrendingTVShows from 'components/TrendingTVShows';
// import TrendingMovies from 'components/TrendingMovies';

const HomePage = () => {
  return (
    <>
      <Header />
      <SectionHero id="home">
        <Hero />
      </SectionHero>
      <Container>
        <Main>
          <CollbackForm/>
          {/* <SectionTrendingTVShows>
            <TrendingTVShows>Trending TV Shows</TrendingTVShows>
          </SectionTrendingTVShows>
          <SectionTrendingMovies>
            <TrendingMovies>Trending Movies</TrendingMovies>
          </SectionTrendingMovies>
          <SectionCategories>
            <Categories>Popular Genres</Categories>
          </SectionCategories>
          <SectionActors>
            <Actors>Popular Actors & Directors</Actors>
          </SectionActors>
          <SectionBaner>
            <Baner />
          </SectionBaner>

          <SectionRegistrationBaner>
            <RegistrationBaner />
          </SectionRegistrationBaner> */}
        </Main>
       
          <Footer />
      
      </Container>
    </>
  );
};

export default HomePage;
