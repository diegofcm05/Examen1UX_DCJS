import React, { useRef } from "react";
import { Card, CardMedia, IconButton, Box } from "@mui/material";
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

  const scrollLeft = () => {
    if (carouselRef.current) {
      if (carouselRef.current.scrollLeft === 0) {
        // Si estamos al inicio, reinicia el scroll al final
        carouselRef.current.scrollLeft = carouselRef.current.scrollWidth;
      } else {
        // Desplazarse a la izquierda
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
        // Si estamos al final, reinicia el scroll al inicio
        carouselRef.current.scrollLeft = 0;
      } else {
        // Desplazarse a la derecha
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <h2 style={{ fontFamily: "Eina01-Bold", marginLeft: "25px"}}>{title}</h2>
      <Box sx={{ position: "relative", width: "100%", overflow: "hidden", marginBottom: "40px" }}>
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
                }}
              >
                <CardMedia component="img" height="125" image={img} alt={`Imagen ${index + 1}`} />
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
