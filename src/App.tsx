import { Route, Routes } from 'react-router-dom';
import './App.css';
import Shop from './pages/shop/Shop.tsx';
import Delivery from './pages/delivery/Delivery';
import SneakerPage from './pages/sneaker-page/SneakerPage';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';

function App() {
  return (
    <div className="app">
      <div className="background"></div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/sneaker/:id" element={<SneakerPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
