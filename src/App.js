
import './App.scss';
import About from './components/about/about';
import Banner from './components/banner/banner';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Products from './components/products/products';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
