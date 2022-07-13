import './App.css';
// import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';


// import products from './data/products.json';
import { Header } from './components/Header';
import { Slider } from './components/Slider';
import { Carousel } from './components/Carousel';
import { Grid } from './components/Grid';
import { Footer } from './components/Footer';

function App() {
  //const { data, isLoading } = useFeaturedBanners();


  return (
    <>
      <Header/>   
      <Slider/>
      <Carousel/>
      <Grid/>
      <Footer/>

    </>
  );
}

export default App;
