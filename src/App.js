import './App.css';
import Brands from './components/Brands';
import FeaturedPosts from './components/FeaturedPosts';
import FeaturedProducts from './components/FeaturedProducts';
import ProductCard from './components/ProductCard';
import ProductCardSecond from './components/ProductCardSecond';
import ShopCards from './components/ShopCards';
import WeLoveWhatWeDo from './components/WeLoveWhatWeDo';
import Footer from './layouts/Footer';
import Homepage from './layouts/Homepage';

function App() {
  return (
    <div className="App">
      <Homepage />
      <ProductCard />
      <Brands />
      <ShopCards />
      <ProductCardSecond />
      <WeLoveWhatWeDo />
      <FeaturedProducts />
      <FeaturedPosts/>
      <Footer/>
    </div>
  );
}

export default App;