// src/components/home/ProductCard.jsx
import './ProductCard.css';

// Usamos valores por defecto en la desestructuración para evitar errores de "undefined"
export default function ProductCard({ 
  image = "/placeholder-chemical.png", 
  name = "Product Name", 
  casNumber = "CAS N/A",
  description = "",
  link = "#" 
}) {
  
  // Hardening: Validación de seguridad simple para el link
  const safeLink = link.startsWith('http') || link.startsWith('/') ? link : '#';

  return (
    <article className="product-card">
      <div className="product-card__image-container">
        <img 
          src={image} 
          alt={`Chemical product: ${name}`} 
          loading="lazy" // Optimización de rendimiento para carga inicial
          className="product-card__img"
        />
      </div>

      <div className="product-card__content">
        <header>
          <h2 className="product-card__title">{name}</h2>
          <span className="product-card__cas">CAS {casNumber}</span>
        </header>

        <p className="product-card__description">
          {description || "High-quality chemical intermediate for professional manufacture."}
        </p>

        <footer className="product-card__actions">
          <a href={safeLink} className="btn btn--secondary">Read More</a>
          {/* Este botón podría disparar un modal o scroll al formulario de inquiry */}
          <button 
            className="btn btn--primary"
            onClick={() => window.location.href = '#inquiry-section'}
          >
            Send Inquiry
          </button>
        </footer>
      </div>
    </article>
  );
}