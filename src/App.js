import './App.css';
import Header from './Components/Header';
import MealCards from './Components/MealCards';
import About from './Components/About'
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import AllTestimonials from './Components/AllTestimonials';

function App() {
  return (
    <main>
      <Header />
      <Intro />
      <MealCards />
      <AllTestimonials />
      <About />
      <Footer />
    </main>
  );
}

export default App;
