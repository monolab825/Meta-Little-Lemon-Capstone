import Header from '../Components/Header';
import MealCards from '../Components/MealCards';
import About from '../Components/About'
import Footer from '../Components/Footer';
import Intro from '../Components/Intro';
import AllTestimonials from '../Components/AllTestimonials';

const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <MealCards />
      <AllTestimonials />
      <About />
      <Footer />
    </>
  );
}

export default Home;
