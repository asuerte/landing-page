import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Home/>
      <Analytics/>
      <Newsletter/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
