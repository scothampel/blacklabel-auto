import './css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import Hero from './Hero';
import Services from './Services';

function App() {
  return (
    <div className='App' id='app'>
      <Nav />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
