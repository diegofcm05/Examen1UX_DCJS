import React, { useRef, useEffect, useState } from "react";
import { Card, CardMedia, IconButton, Box, LinearProgress } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface ScrollableCarouselProps {
  title: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
  img7: string;
  img8: string;
  img9: string;
  img10: string;
  img11: string;
  img12: string;
}

const ScrollableCarousel: React.FC<ScrollableCarouselProps> = ({
  title,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
}) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const scrollAmount = 1200;

  // Estado para los valores de progreso aleatorios para cada imagen
  const [progressValues, setProgressValues] = useState<number[]>([]);

  useEffect(() => {
    // Generar un valor de progreso aleatorio entre 5 y 80 para cada imagen
    const randomProgressValues = Array.from({ length: 12 }, () => 
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
      <h2 style={{ fontFamily: "Eina01-Bold", marginLeft: "25px" }}>{title}</h2>
      <Box sx={{ position: "relative", width: "100%", overflow: "hidden", marginBottom: "20px" }}>
        {/* Botón izquierdo */}
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            zIndex: 1,
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
          {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12].map(
            (img, index) => (
              <Card
                key={index}
                sx={{
                  width: 230,
                  flexShrink: 0,
                  boxShadow: "none",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia component="img" height="125" image={img} alt={`Imagen ${index + 1}`} />
                {/* Barra de progreso individual debajo de cada imagen */}
                <LinearProgress
                  variant="determinate"
                  value={progressValues[index]}
                  sx={{
                    height: "4px", // Tamaño pequeño de la barra
                    backgroundColor: "lightgray",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: "red", // Color de la barra de progreso
                    },
                  }}
                />
              </Card>
            )
          )}
        </div>

        {/* Botón derecho */}
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            zIndex: 1,
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
