import './css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import Hero from './Hero';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  return (
    <div className='App' id='app'>
      <Nav />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
