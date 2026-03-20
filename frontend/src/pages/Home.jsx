import React from "react";
import CatCarousel from "../components/CatCarousel";

export default function Home() {
  return (
    <div style={{ textAlign: "center", paddingBottom: "2rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Bienvenido a Bengapers </h1>
      <CatCarousel />
      
      {/* 👇 Texto debajo del carrusel */}
      <p style={{ marginTop: "1rem", fontSize: "1rem", color: "#555" }}>
        Descubre la elegancia de los gatos Persas y la energía de los Bengalíes.  
        Explora nuestras páginas para conocer más sobre cada raza y encontrar tu compañero ideal.
        Ve por el tuyo
      </p>
    </div>
  );
}