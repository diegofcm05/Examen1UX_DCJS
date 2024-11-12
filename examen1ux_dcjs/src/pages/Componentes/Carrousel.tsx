// Carousel.tsx
import React, { useRef } from "react";
import { IconButton, Box } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import HoverCard from "./HoverCard"; // Importa el componente HoverCard

interface CarouselItem {
  img: string; // Imagen principal
  hoverImg: string; // Imagen que se muestra al pasar el mouse sobre una serie/pelicula
  title: string; //Titulo de la serie/pelicula 
  episodes: string; //episodios/duracion
  genres: string[]; //genero(s)
}

interface ScrollableCarouselProps {
  title: string;
  items: CarouselItem[]; // Arreglo de objetos con toda la informacion necesaria
}

const ScrollableCarousel: React.FC<ScrollableCarouselProps> = ({ title, items }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const scrollAmount = 1200;

  //Funcion para scroll a la izquierda
  const scrollLeft = () => {
    if (carouselRef.current) {
      if (carouselRef.current.scrollLeft === 0) {
        carouselRef.current.scrollLeft = carouselRef.current.scrollWidth;
      } else {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  //Funcion para scroll a la derecha
  const scrollRight = () => {
    if (carouselRef.current) {
      if (
        carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
        carouselRef.current.scrollWidth
      ) {
        carouselRef.current.scrollLeft = 0;
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <h2 style={{ fontFamily: "Eina01-Bold", marginLeft: "24px"}}>{title}</h2>
      <Box sx={{ position: "relative", width: "100%", overflow: "hidden", marginBottom: "34px" }}>
        {/*Botón izquierdo del scroller*/}
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            zIndex: 12,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          onClick={scrollLeft}
        >
          <ChevronLeft style={{ color: "white" }} />
        </IconButton>

        {/*Contenedor del carrusel*/}
        <div
          ref={carouselRef}
          style={{
            display: "flex",
            overflowX: "auto",
            scrollBehavior: "smooth",
            gap: "5px",
            padding: "20px",
          }}
        >
          {items.map((item, index) => (
            <HoverCard
              key={index}
              img={item.img}
              hoverImg={item.hoverImg}
              title={item.title}
              episodes={item.episodes}
              genres={item.genres}
            />
          ))}
        </div>

        {/*Botón derecho del scroller*/}
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            zIndex: 12,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          onClick={scrollRight}
        >
          <ChevronRight style={{ color: "white" }} />
        </IconButton>
      </Box>
    </>
  );
};
//Exportacion
export default ScrollableCarousel;
