import { BrowserRouter, Router, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Inquiry from './pages/Inquiry';
import Contact from './pages/Contact';


function App() {
  return (
<BrowserRouter>
      <Routes>
        {/* El Layout envuelve a todas las rutas */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* 'index' significa que es la ruta por defecto */}
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="inquiry" element={<Inquiry />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App
