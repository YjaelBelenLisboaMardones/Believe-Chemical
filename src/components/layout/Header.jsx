import './Header.css';
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className="head-wrapper">
      <nav className="nav-bar">
        <div className="logo">
          <img src={logo} alt="Believe Chemical Logo" />
        </div>
        <ul className="nav">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/inquiry">Send Inquiry</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}