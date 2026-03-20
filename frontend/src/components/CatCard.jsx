// src/components/CatCard.jsx
function CatCard({ nombre, descripcion, precio, imagen }) {
  return (
    <div className="cat-card">
      <img src={imagen} alt={nombre} className="cat-img" />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p><strong>Precio:</strong> ${precio}</p>

      {/* Botón de WhatsApp */}
      <a
        href={`https://wa.me/573215926367?text=Hola,%20quiero%20más%20información%20sobre%20el ${nombre} que cuesta $${precio}` }
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        <i className="fab fa-whatsapp"></i> Más información
      </a>
    </div>
  );
}

export default CatCard;