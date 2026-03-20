import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // 👈 efecto suave
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import persa1 from "../assets/persa/persa1.jpeg";
import persa2 from "../assets/persa/persa2.jpeg";
import bengali1 from "../assets/bengali/bengali1.jpg";
import bengali2 from "../assets/bengali/bengali2.jpeg";

export default function CatCarousel() {
  const images = [
    { src: persa1, alt: "Gato Persa 1" },
    { src: persa2, alt: "Gato Persa 2" },
    { src: bengali1, alt: "Gato Bengalí 1" },
    { src: bengali2, alt: "Gato Bengalí 2" },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      spaceBetween={10}
      slidesPerView={1}
      effect="fade" // 👈 transición suave
      loop={true}
      autoplay={{
        delay: 2000, // cada 2 segundos
        disableOnInteraction: false, // sigue aunque el usuario interactúe
      }}
      style={{ width: "280px", height: "200px" }} // 👈 más pequeño
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img.src}
            alt={img.alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}