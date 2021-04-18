import './css/App.css';
import Nav from './Nav';
import Footer from './Footer';

function App() {
  return (
    <div className='App' id='app'>
      <Nav />
      <div style={{'height': '3000px'}}></div>
      <Footer />
    </div>
  );
}

export default App;
