import React from "react";
import "../styles/Contacto.css"; // estilos del formulario

export default function Contacto() {
  return (
    <div>
      <h1>Contactanos</h1>
      <p>
        En Bengapers nos encanta compartir información sobre gatos exóticos y
        atender las inquietudes de nuestra comunidad. Si deseas comunicarte con
        nosotros, aquí tienes nuestros datos principales:
      </p>

      <ul>
        <li><strong>Email:</strong> leidyjohanafilos@gmail.com</li>
        <li><strong>Teléfonos:</strong> +57 3215926367 &nbsp; +57 3106793279</li>
        <li><strong>Ubicación:</strong> La Virginia, Risaralda, Colombia</li>
      </ul>

      <h2>Encuéntranos</h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.812896947!2d-75.882!3d5.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e388f3b7f0f0f0f%3A0x123456789abcdef!2sLa%20Virginia%2C%20Risaralda!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa La Virginia Risaralda"
        ></iframe>
   </div>
    </div>
  );
}
