import './css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import Hero from './Hero';
import Services from './Services';
import Portfolio from './Portfolio'

function App() {
  return (
    <div className='App' id='app'>
      <Nav />
      <Hero />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
