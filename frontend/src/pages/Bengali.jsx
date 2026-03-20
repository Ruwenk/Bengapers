import CatCard from "../components/CatCard";
import { gatosBengali } from "../data/Cats";
import "../styles/CatCard.css"; // asegúrate de importar los estilos

function Bengali() {
  return (
    <main className="bengali-container">
      <h2>Gato Bengalí</h2>
      <p>
        Nuestros gatos Bengalí se caracterizan por su energía vibrante, su curiosidad y su pelaje exótico con patrones únicos. 
        Cada ejemplar combina fuerza y elegancia, siendo ideales para hogares activos que disfrutan de la compañía de un gato juguetón y lleno de vida. 
        Su aspecto salvaje y su temperamento amigable los convierten en una raza fascinante y muy apreciada.
      </p>

      <h3>Ejemplares disponibles</h3>
      <div className="cards-grid">
        {gatosBengali.map((gato, index) => (
          <CatCard key={index} {...gato} />
        ))}
      </div>
    </main>
  );
}

export default Bengali;