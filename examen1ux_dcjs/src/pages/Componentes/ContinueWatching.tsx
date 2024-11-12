// Carousel.tsx
import React, { useRef, useEffect, useState } from "react";
import { IconButton, Box, LinearProgress } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import HoverCard from "./HoverCard"; // Importa el componente HoverCard

interface CarouselItem {
  img: string;        // Imagen principal
  hoverImg: string;   // Imagen que se muestra en el hover
  title: string;
  episodes: string;
  genres: string[];
}

interface ScrollableCarouselProps {
  title: string;
  items: CarouselItem[]; // Arreglo de objetos con ambas imágenes y demás información
}

const ScrollableCarousel: React.FC<ScrollableCarouselProps> = ({ title, items }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const scrollAmount = 1200;

  // Estado para los valores de progreso aleatorios para cada imagen
  const [progressValues, setProgressValues] = useState<number[]>([]);

  useEffect(() => {
    // Generar un valor de progreso aleatorio entre 5 y 80 para cada imagen
    const randomProgressValues = Array.from({ length: items.length }, () => 
      Math.floor(Math.random() * (80 - 5 + 1)) + 5
    );
    setProgressValues(randomProgressValues);
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      if (carouselRef.current.scrollLeft === 0) {
        carouselRef.current.scrollLeft = carouselRef.current.scrollWidth;
      } else {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };


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
        {/* Botón izquierdo */}
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

        {/* Contenedor del carrusel */}
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
             <Box key={index}> {/* Ajustar el ancho según sea necesario */}
             <HoverCard
               img={item.img}
               hoverImg={item.hoverImg}
               title={item.title}
               episodes={item.episodes}
               genres={item.genres}
             />
               <LinearProgress
                 variant="determinate"
                 value={progressValues[index] || 0} // Uso de un valor predeterminado de 0 si está indefinido
                 sx={{
                   height: "4px",
                   backgroundColor: "lightgray",
                   "& .MuiLinearProgress-bar": {
                     backgroundColor: "red",
                   },
                 }}
               />
           </Box>          
          ))}
         
        </div>

        {/* Botón derecho */}
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

export default ScrollableCarousel;
