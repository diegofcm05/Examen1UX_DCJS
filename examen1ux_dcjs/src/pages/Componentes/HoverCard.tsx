import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton, Box } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import InfoIcon from "@mui/icons-material/Info";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface HoverCardProps {
  img: string;
  hoverImg: string;
  title: string;
  episodes: string;
  genres: string[];
}

//Declaracion de objeto tarjeta
const HoverCard: React.FC<HoverCardProps> = ({ img, hoverImg, title, episodes, genres }) => {
  const [hovered, setHovered] = useState(false);
  const [hoverPosition, setHoverPosition] = useState<{ top: number; left: number; }>({ top: 0, left: 0 });

  //Al poner el mouse encima, se activa la tarjeta
  const handleMouseEnter = (event: React.MouseEvent) => {
    const rect = (event.target as HTMLImageElement).getBoundingClientRect();
    setHoverPosition({ top: rect.bottom+4, left: rect.left });
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "255px", 
        height: "auto",    
        cursor: "pointer",
        flexShrink: 0,     //Previene el encogido al hacerle re-size a la pagina
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/*Imagen principal de la tarjeta, osea el adelanto*/}
      <CardMedia
        component="img"
        height="138"
        image={img}
        alt={title}
        sx={{
          borderRadius: 1,
          objectFit: "cover",  //Esto previene la distorsion de imagen
        }}
      />

      {/* Contenedor de la tarjeta de información que aparece en hover */}
      {hovered && (
        <Card
          sx={{
            position: "fixed",
            top: hoverPosition.top,
            left: hoverPosition.left,
            width: "255px",
            zIndex: 10,
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            transform: "translateY(-100%)",
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image={hoverImg}
            alt={title}
            sx={{
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" fontFamily="Eina01-Bold">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', fontFamily: 'Eina01-Bold'}}>
              {episodes}
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', fontFamily: 'Eina01-Bold' }}>
              {genres.join(" • ")}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton sx={{ color: "white" }}>
              <PlayCircleOutlineIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <InfoIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <AddCircleOutlineIcon/>
            </IconButton>
          </CardActions>
        </Card>
      )}
    </Box>
  );
};

export default HoverCard;

