import CatCard from "../components/CatCard";
import { gatosPersa } from "../data/Cats";
import "../styles/CatCard.css"; // asegúrate de importar los estilos

function Persa() {
  return (
    <main className="persa-container">
      <h2>Gato Persa</h2>
      <p>
        Nuestros gatos Persa se distinguen por su dulzura incomparable, su carácter tranquilo y su mirada llena de ternura. 
        Cada ejemplar es fruto de una genética cuidadosamente seleccionada, enfocada en preservar la armonía de la raza, la salud y su temperamento amoroso. 
        El color profundo y uniforme, junto a un pelaje abundante, sedoso y de alta calidad, reflejan la dedicación y el cuidado que reciben desde sus primeros días.
      </p>

      <h3>Ejemplares disponibles</h3>
      <div className="cards-grid">
        {gatosPersa.map((gato, index) => (
          <CatCard key={index} {...gato} />
        ))}
      </div>
    </main>
  );
}

export default Persa;