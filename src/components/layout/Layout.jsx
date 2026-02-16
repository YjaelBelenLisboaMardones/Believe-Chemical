import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        {/* Aquí es donde 'Home', 'About', etc. aparecerán mágicamente */}
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
}