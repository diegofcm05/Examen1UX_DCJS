import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton, Box } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";

interface HoverCardProps {
  img: string;
  hoverImg: string;
  title: string;
  episodes: string;
  genres: string[];
}

const HoverCard: React.FC<HoverCardProps> = ({ img, hoverImg, title, episodes, genres }) => {
  const [hovered, setHovered] = useState(false);
  const [hoverPosition, setHoverPosition] = useState<{ top: number; left: number; }>({ top: 0, left: 0 });

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
        width: "255px",    // Fix width
        height: "auto",    // Maintain aspect ratio
        cursor: "pointer",
        flexShrink: 0,     // Prevent shrinking when resizing
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Imagen principal */}
      <CardMedia
        component="img"
        height="138"
        image={img}
        alt={title}
        sx={{
          borderRadius: 1,
          objectFit: "cover",  // Prevent distortion
        }}
      />

      {/* Contenedor de la tarjeta de información que aparece en hover */}
      {hovered && (
        <Card
          sx={{
            position: "fixed",
            top: hoverPosition.top,
            left: hoverPosition.left,
            width: "255px",    // Set fixed width
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
              objectFit: "cover", // Prevent distortion on hover image
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
              <PlayArrowIcon />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <InfoIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </Box>
  );
};

export default HoverCard;

