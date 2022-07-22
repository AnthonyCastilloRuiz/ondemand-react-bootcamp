import './App.css';
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom';
// import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';

import { Header } from './components/Header';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { ProductList } from './components/ProductList';

function App() {
  //const { data, isLoading } = useFeaturedBanners();

  return (
    <>
      <div>
        <div>
          <Router>
          <Header/>   
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/myproc' element={<ProductList/>} />
            </Routes>
            <Footer/>
          </Router>
        </div>
      </div>
 

    </>
  );
}

export default App;
