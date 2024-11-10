import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import NavbarC from "./Componentes/navbar";
import NetflixNavbar from "./Componentes/navbar";
import Header from "./Componentes/header";
import Carousel from "./Componentes/Carrousel";
import Continue from "./Componentes/ContinueWatching";
import ImageCard from "./Componentes/HoverCard";
import ScrollableCarousel from "./Componentes/Carrousel";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

 // Carrusel 1
 const carouselItems = [
  { img: "https://wallpapersbq.com/images/dandadan-netflix/dandadan-netflix-wallpaper-5.webp", 
    hoverImg: "https://media1.tenor.com/m/ZOhDt9bmFTQAAAAd/dandadan-anime-dandadan.gif",
    title: "Dandadan", episodes: "6 Episodes", genres: ["Offbeat", "Irreverent"],
  },
  { img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/bc5934e65dcfc3e6f1f783160ce023fb.jpg", 
    hoverImg: "https://media1.tenor.com/m/pPtKViokf2oAAAAd/blue-lock-nagi-seishiro.gif",
    title: "Blue Lock", episodes: "2 Seasons", genres: ["Inspiring", "Drama Anime"],
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:2000/1*6g0DW6WPqyI43bagLvgscw.png",
    hoverImg: "https://media1.tenor.com/m/scfAG7QPodkAAAAd/peeking-pope-heyward.gif",
    title: "Outer Banks", episodes: "4 Seasons", genres: ["Suspeneful", "Exciting"],
  },
  {
    img: "https://hipermediaciones.com/wp-content/uploads/2013/10/21225_breaking_bad.jpg?w=1000",
    hoverImg: "https://media1.tenor.com/m/X0AhE2fo0MwAAAAd/walter-white-walter.gif",
    title: "Breaking Bad", episodes: "5 Seasons", genres: ["Violent", "Gritty"],
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/fe1c0138b7b0e05ea22a711f44e57cd80cfbaea30745c425b7043d786ba66cd1.jpg",
    hoverImg: "https://media1.tenor.com/m/WxG37gS6nX4AAAAd/bettercallsaul-better-call-saul.gif",
    title: "Better Call Saul", episodes: "6 Seasons", genres: ["Crime", "Drama"],
  },
  {
    img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/08/06/17229358331116.png",
    hoverImg: "https://media1.tenor.com/m/PLVLLkZJYmQAAAAd/hn2i-hn2i_.gif",
    title: "Prison Break", episodes: "5 Seasons", genres: ["Dark", "Suspenseful"],
  },
  {
    img: "https://material.asset.catchplay.com/SNY-ID-002-A1101/artworks/posters/SNY-ID-002-A1101-P272.jpg?hash=1731154944",
    hoverImg: "https://media1.tenor.com/m/fhMRxJwYm04AAAAd/venom2-venom.gif",
    title: "Venom 2", episodes: "1h 37m", genres: ["Adrenaline Rush", "Slick"],
  },
  {
    img: "https://www.tvn.cl/tvn/site/artic/20240306/imag/foto_0000001420240306103541/Dr_House_Sexta_Temporada.jpg",
    hoverImg: "https://media1.tenor.com/m/eDUo56vr8WAAAAAd/gregory-house-house-md.gif",
    title: "Dr. House", episodes: "8 Seasons", genres: ["Irreverent", "Dark", "Drama"],
  },
  {
    img: "https://i.ytimg.com/vi/gpPvt7DQmK0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADJWMC1juMeh3ZeSvaqwHqHfdGJA",
    hoverImg: "https://media.tenor.com/53JzIxlooycAAAAM/parasaur-giant.gif",
    title: "Lake Placid vs. Anaconda", episodes: "1h 32m", genres: ["Terror", "Action"],
  },
  {
    img: "https://www.rockandpop.cl/wp-content/uploads/2024/08/Foto-web-1-1-jpg.webp",
    hoverImg: "https://media1.tenor.com/m/IAt2eROADMoAAAAd/anaconda-movie-jlo.gif",
    title: "Anaconda", episodes: "1h 29m", genres: ["Adventure", "Terror"],
  },
  {
    img: "https://i.ytimg.com/vi/WizL7xhbmek/hqdefault.jpg",
    hoverImg: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXE1bHI3Y3htZWF0cm5oZjBoYXNxaXd1ankydjQwMzNtaXJ6NGVtMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11feh7z3rzyLGo/giphy.webp",
    title: "Lavalantula", episodes: "1h 23m", genres: ["Terror", "Science Fiction"],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS367CWBl-7gmSpLY40sNpR2MYYYij3P0w3eQ&s",
    hoverImg: "https://media1.tenor.com/m/ApQxgVfsYRcAAAAd/fin-fin-shepard.gif",
    title: "Sharknado", episodes: "1h 26m", genres: ["Sci-Fi", "Terror"],
  },

];

// Carrusel 2
const carouselItems2 = [
  { img: "https://wallpapersbq.com/images/dandadan-netflix/dandadan-netflix-wallpaper-5.webp", 
    hoverImg: "https://media1.tenor.com/m/ZOhDt9bmFTQAAAAd/dandadan-anime-dandadan.gif",
    title: "Dandadan", episodes: "6 Episodes", genres: ["Offbeat", "Irreverent"],
  },
  { img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/bc5934e65dcfc3e6f1f783160ce023fb.jpg", 
    hoverImg: "https://media1.tenor.com/m/pPtKViokf2oAAAAd/blue-lock-nagi-seishiro.gif",
    title: "Blue Lock", episodes: "2 Seasons", genres: ["Inspiring", "Drama Anime"],
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:2000/1*6g0DW6WPqyI43bagLvgscw.png",
    hoverImg: "https://media1.tenor.com/m/scfAG7QPodkAAAAd/peeking-pope-heyward.gif",
    title: "Outer Banks", episodes: "4 Seasons", genres: ["Suspeneful", "Exciting"],
  },
  {
    img: "https://hipermediaciones.com/wp-content/uploads/2013/10/21225_breaking_bad.jpg?w=1000",
    hoverImg: "https://media1.tenor.com/m/X0AhE2fo0MwAAAAd/walter-white-walter.gif",
    title: "Breaking Bad", episodes: "5 Seasons", genres: ["Violent", "Gritty"],
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/fe1c0138b7b0e05ea22a711f44e57cd80cfbaea30745c425b7043d786ba66cd1.jpg",
    hoverImg: "https://media1.tenor.com/m/WxG37gS6nX4AAAAd/bettercallsaul-better-call-saul.gif",
    title: "Better Call Saul", episodes: "6 Seasons", genres: ["Crime", "Drama"],
  },
  {
    img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/08/06/17229358331116.png",
    hoverImg: "https://media1.tenor.com/m/PLVLLkZJYmQAAAAd/hn2i-hn2i_.gif",
    title: "Prison Break", episodes: "5 Seasons", genres: ["Dark", "Suspenseful"],
  },
  {
    img: "https://material.asset.catchplay.com/SNY-ID-002-A1101/artworks/posters/SNY-ID-002-A1101-P272.jpg?hash=1731154944",
    hoverImg: "https://media1.tenor.com/m/fhMRxJwYm04AAAAd/venom2-venom.gif",
    title: "Venom 2", episodes: "1h 37m", genres: ["Adrenaline Rush", "Slick"],
  },
  {
    img: "https://www.tvn.cl/tvn/site/artic/20240306/imag/foto_0000001420240306103541/Dr_House_Sexta_Temporada.jpg",
    hoverImg: "https://media1.tenor.com/m/eDUo56vr8WAAAAAd/gregory-house-house-md.gif",
    title: "Dr. House", episodes: "8 Seasons", genres: ["Irreverent", "Dark", "Drama"],
  },
  {
    img: "https://i.ytimg.com/vi/gpPvt7DQmK0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADJWMC1juMeh3ZeSvaqwHqHfdGJA",
    hoverImg: "https://media.tenor.com/53JzIxlooycAAAAM/parasaur-giant.gif",
    title: "Lake Placid vs. Anaconda", episodes: "1h 32m", genres: ["Terror", "Action"],
  },
  {
    img: "https://www.rockandpop.cl/wp-content/uploads/2024/08/Foto-web-1-1-jpg.webp",
    hoverImg: "https://media1.tenor.com/m/IAt2eROADMoAAAAd/anaconda-movie-jlo.gif",
    title: "Anaconda", episodes: "1h 29m", genres: ["Adventure", "Terror"],
  },
  {
    img: "https://i.ytimg.com/vi/WizL7xhbmek/hqdefault.jpg",
    hoverImg: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXE1bHI3Y3htZWF0cm5oZjBoYXNxaXd1ankydjQwMzNtaXJ6NGVtMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11feh7z3rzyLGo/giphy.webp",
    title: "Lavalantula", episodes: "1h 23m", genres: ["Terror", "Science Fiction"],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS367CWBl-7gmSpLY40sNpR2MYYYij3P0w3eQ&s",
    hoverImg: "https://media1.tenor.com/m/ApQxgVfsYRcAAAAd/fin-fin-shepard.gif",
    title: "Sharknado", episodes: "1h 26m", genres: ["Sci-Fi", "Terror"],
  },

];


// Carrusel 3
const carouselItems3 = [
  { img: "https://wallpapersbq.com/images/dandadan-netflix/dandadan-netflix-wallpaper-5.webp", 
    hoverImg: "https://media1.tenor.com/m/ZOhDt9bmFTQAAAAd/dandadan-anime-dandadan.gif",
    title: "Dandadan", episodes: "6 Episodes", genres: ["Offbeat", "Irreverent"],
  },
  { img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/bc5934e65dcfc3e6f1f783160ce023fb.jpg", 
    hoverImg: "https://media1.tenor.com/m/pPtKViokf2oAAAAd/blue-lock-nagi-seishiro.gif",
    title: "Blue Lock", episodes: "2 Seasons", genres: ["Inspiring", "Drama Anime"],
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:2000/1*6g0DW6WPqyI43bagLvgscw.png",
    hoverImg: "https://media1.tenor.com/m/scfAG7QPodkAAAAd/peeking-pope-heyward.gif",
    title: "Outer Banks", episodes: "4 Seasons", genres: ["Suspeneful", "Exciting"],
  },
  {
    img: "https://hipermediaciones.com/wp-content/uploads/2013/10/21225_breaking_bad.jpg?w=1000",
    hoverImg: "https://media1.tenor.com/m/X0AhE2fo0MwAAAAd/walter-white-walter.gif",
    title: "Breaking Bad", episodes: "5 Seasons", genres: ["Violent", "Gritty"],
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/fe1c0138b7b0e05ea22a711f44e57cd80cfbaea30745c425b7043d786ba66cd1.jpg",
    hoverImg: "https://media1.tenor.com/m/WxG37gS6nX4AAAAd/bettercallsaul-better-call-saul.gif",
    title: "Better Call Saul", episodes: "6 Seasons", genres: ["Crime", "Drama"],
  },
  {
    img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/08/06/17229358331116.png",
    hoverImg: "https://media1.tenor.com/m/PLVLLkZJYmQAAAAd/hn2i-hn2i_.gif",
    title: "Prison Break", episodes: "5 Seasons", genres: ["Dark", "Suspenseful"],
  },
  {
    img: "https://material.asset.catchplay.com/SNY-ID-002-A1101/artworks/posters/SNY-ID-002-A1101-P272.jpg?hash=1731154944",
    hoverImg: "https://media1.tenor.com/m/fhMRxJwYm04AAAAd/venom2-venom.gif",
    title: "Venom 2", episodes: "1h 37m", genres: ["Adrenaline Rush", "Slick"],
  },
  {
    img: "https://www.tvn.cl/tvn/site/artic/20240306/imag/foto_0000001420240306103541/Dr_House_Sexta_Temporada.jpg",
    hoverImg: "https://media1.tenor.com/m/eDUo56vr8WAAAAAd/gregory-house-house-md.gif",
    title: "Dr. House", episodes: "8 Seasons", genres: ["Irreverent", "Dark", "Drama"],
  },
  {
    img: "https://i.ytimg.com/vi/gpPvt7DQmK0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADJWMC1juMeh3ZeSvaqwHqHfdGJA",
    hoverImg: "https://media.tenor.com/53JzIxlooycAAAAM/parasaur-giant.gif",
    title: "Lake Placid vs. Anaconda", episodes: "1h 32m", genres: ["Terror", "Action"],
  },
  {
    img: "https://www.rockandpop.cl/wp-content/uploads/2024/08/Foto-web-1-1-jpg.webp",
    hoverImg: "https://media1.tenor.com/m/IAt2eROADMoAAAAd/anaconda-movie-jlo.gif",
    title: "Anaconda", episodes: "1h 29m", genres: ["Adventure", "Terror"],
  },
  {
    img: "https://i.ytimg.com/vi/WizL7xhbmek/hqdefault.jpg",
    hoverImg: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXE1bHI3Y3htZWF0cm5oZjBoYXNxaXd1ankydjQwMzNtaXJ6NGVtMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11feh7z3rzyLGo/giphy.webp",
    title: "Lavalantula", episodes: "1h 23m", genres: ["Terror", "Science Fiction"],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS367CWBl-7gmSpLY40sNpR2MYYYij3P0w3eQ&s",
    hoverImg: "https://media1.tenor.com/m/ApQxgVfsYRcAAAAd/fin-fin-shepard.gif",
    title: "Sharknado", episodes: "1h 26m", genres: ["Sci-Fi", "Terror"],
  },

];


// Carrusel 4
const carouselItems4 = [
  { img: "https://wallpapersbq.com/images/dandadan-netflix/dandadan-netflix-wallpaper-5.webp", 
    hoverImg: "https://media1.tenor.com/m/ZOhDt9bmFTQAAAAd/dandadan-anime-dandadan.gif",
    title: "Dandadan", episodes: "6 Episodes", genres: ["Offbeat", "Irreverent"],
  },
  { img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/bc5934e65dcfc3e6f1f783160ce023fb.jpg", 
    hoverImg: "https://media1.tenor.com/m/pPtKViokf2oAAAAd/blue-lock-nagi-seishiro.gif",
    title: "Blue Lock", episodes: "2 Seasons", genres: ["Inspiring", "Drama Anime"],
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:2000/1*6g0DW6WPqyI43bagLvgscw.png",
    hoverImg: "https://media1.tenor.com/m/scfAG7QPodkAAAAd/peeking-pope-heyward.gif",
    title: "Outer Banks", episodes: "4 Seasons", genres: ["Suspeneful", "Exciting"],
  },
  {
    img: "https://hipermediaciones.com/wp-content/uploads/2013/10/21225_breaking_bad.jpg?w=1000",
    hoverImg: "https://media1.tenor.com/m/X0AhE2fo0MwAAAAd/walter-white-walter.gif",
    title: "Breaking Bad", episodes: "5 Seasons", genres: ["Violent", "Gritty"],
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/fe1c0138b7b0e05ea22a711f44e57cd80cfbaea30745c425b7043d786ba66cd1.jpg",
    hoverImg: "https://media1.tenor.com/m/WxG37gS6nX4AAAAd/bettercallsaul-better-call-saul.gif",
    title: "Better Call Saul", episodes: "6 Seasons", genres: ["Crime", "Drama"],
  },
  {
    img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/08/06/17229358331116.png",
    hoverImg: "https://media1.tenor.com/m/PLVLLkZJYmQAAAAd/hn2i-hn2i_.gif",
    title: "Prison Break", episodes: "5 Seasons", genres: ["Dark", "Suspenseful"],
  },
  {
    img: "https://material.asset.catchplay.com/SNY-ID-002-A1101/artworks/posters/SNY-ID-002-A1101-P272.jpg?hash=1731154944",
    hoverImg: "https://media1.tenor.com/m/fhMRxJwYm04AAAAd/venom2-venom.gif",
    title: "Venom 2", episodes: "1h 37m", genres: ["Adrenaline Rush", "Slick"],
  },
  {
    img: "https://www.tvn.cl/tvn/site/artic/20240306/imag/foto_0000001420240306103541/Dr_House_Sexta_Temporada.jpg",
    hoverImg: "https://media1.tenor.com/m/eDUo56vr8WAAAAAd/gregory-house-house-md.gif",
    title: "Dr. House", episodes: "8 Seasons", genres: ["Irreverent", "Dark", "Drama"],
  },
  {
    img: "https://i.ytimg.com/vi/gpPvt7DQmK0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADJWMC1juMeh3ZeSvaqwHqHfdGJA",
    hoverImg: "https://media.tenor.com/53JzIxlooycAAAAM/parasaur-giant.gif",
    title: "Lake Placid vs. Anaconda", episodes: "1h 32m", genres: ["Terror", "Action"],
  },
  {
    img: "https://www.rockandpop.cl/wp-content/uploads/2024/08/Foto-web-1-1-jpg.webp",
    hoverImg: "https://media1.tenor.com/m/IAt2eROADMoAAAAd/anaconda-movie-jlo.gif",
    title: "Anaconda", episodes: "1h 29m", genres: ["Adventure", "Terror"],
  },
  {
    img: "https://i.ytimg.com/vi/WizL7xhbmek/hqdefault.jpg",
    hoverImg: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXE1bHI3Y3htZWF0cm5oZjBoYXNxaXd1ankydjQwMzNtaXJ6NGVtMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11feh7z3rzyLGo/giphy.webp",
    title: "Lavalantula", episodes: "1h 23m", genres: ["Terror", "Science Fiction"],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS367CWBl-7gmSpLY40sNpR2MYYYij3P0w3eQ&s",
    hoverImg: "https://media1.tenor.com/m/ApQxgVfsYRcAAAAd/fin-fin-shepard.gif",
    title: "Sharknado", episodes: "1h 26m", genres: ["Sci-Fi", "Terror"],
  },

];


// Carrusel 5
const carouselItems5 = [
  { img: "https://wallpapersbq.com/images/dandadan-netflix/dandadan-netflix-wallpaper-5.webp", 
    hoverImg: "https://media1.tenor.com/m/ZOhDt9bmFTQAAAAd/dandadan-anime-dandadan.gif",
    title: "Dandadan", episodes: "6 Episodes", genres: ["Offbeat", "Irreverent"],
  },
  { img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/bc5934e65dcfc3e6f1f783160ce023fb.jpg", 
    hoverImg: "https://media1.tenor.com/m/pPtKViokf2oAAAAd/blue-lock-nagi-seishiro.gif",
    title: "Blue Lock", episodes: "2 Seasons", genres: ["Inspiring", "Drama Anime"],
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:2000/1*6g0DW6WPqyI43bagLvgscw.png",
    hoverImg: "https://media1.tenor.com/m/scfAG7QPodkAAAAd/peeking-pope-heyward.gif",
    title: "Outer Banks", episodes: "4 Seasons", genres: ["Suspeneful", "Exciting"],
  },
  {
    img: "https://hipermediaciones.com/wp-content/uploads/2013/10/21225_breaking_bad.jpg?w=1000",
    hoverImg: "https://media1.tenor.com/m/X0AhE2fo0MwAAAAd/walter-white-walter.gif",
    title: "Breaking Bad", episodes: "5 Seasons", genres: ["Violent", "Gritty"],
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/fe1c0138b7b0e05ea22a711f44e57cd80cfbaea30745c425b7043d786ba66cd1.jpg",
    hoverImg: "https://media1.tenor.com/m/WxG37gS6nX4AAAAd/bettercallsaul-better-call-saul.gif",
    title: "Better Call Saul", episodes: "6 Seasons", genres: ["Crime", "Drama"],
  },
  {
    img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/08/06/17229358331116.png",
    hoverImg: "https://media1.tenor.com/m/PLVLLkZJYmQAAAAd/hn2i-hn2i_.gif",
    title: "Prison Break", episodes: "5 Seasons", genres: ["Dark", "Suspenseful"],
  },
  {
    img: "https://material.asset.catchplay.com/SNY-ID-002-A1101/artworks/posters/SNY-ID-002-A1101-P272.jpg?hash=1731154944",
    hoverImg: "https://media1.tenor.com/m/fhMRxJwYm04AAAAd/venom2-venom.gif",
    title: "Venom 2", episodes: "1h 37m", genres: ["Adrenaline Rush", "Slick"],
  },
  {
    img: "https://www.tvn.cl/tvn/site/artic/20240306/imag/foto_0000001420240306103541/Dr_House_Sexta_Temporada.jpg",
    hoverImg: "https://media1.tenor.com/m/eDUo56vr8WAAAAAd/gregory-house-house-md.gif",
    title: "Dr. House", episodes: "8 Seasons", genres: ["Irreverent", "Dark", "Drama"],
  },
  {
    img: "https://i.ytimg.com/vi/gpPvt7DQmK0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADJWMC1juMeh3ZeSvaqwHqHfdGJA",
    hoverImg: "https://media.tenor.com/53JzIxlooycAAAAM/parasaur-giant.gif",
    title: "Lake Placid vs. Anaconda", episodes: "1h 32m", genres: ["Terror", "Action"],
  },
  {
    img: "https://www.rockandpop.cl/wp-content/uploads/2024/08/Foto-web-1-1-jpg.webp",
    hoverImg: "https://media1.tenor.com/m/IAt2eROADMoAAAAd/anaconda-movie-jlo.gif",
    title: "Anaconda", episodes: "1h 29m", genres: ["Adventure", "Terror"],
  },
  {
    img: "https://i.ytimg.com/vi/WizL7xhbmek/hqdefault.jpg",
    hoverImg: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXE1bHI3Y3htZWF0cm5oZjBoYXNxaXd1ankydjQwMzNtaXJ6NGVtMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11feh7z3rzyLGo/giphy.webp",
    title: "Lavalantula", episodes: "1h 23m", genres: ["Terror", "Science Fiction"],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS367CWBl-7gmSpLY40sNpR2MYYYij3P0w3eQ&s",
    hoverImg: "https://media1.tenor.com/m/ApQxgVfsYRcAAAAd/fin-fin-shepard.gif",
    title: "Sharknado", episodes: "1h 26m", genres: ["Sci-Fi", "Terror"],
  },

];


// Carrusel 6
const carouselItems6 = [
  { img: "https://wallpapersbq.com/images/dandadan-netflix/dandadan-netflix-wallpaper-5.webp", 
    hoverImg: "https://media1.tenor.com/m/ZOhDt9bmFTQAAAAd/dandadan-anime-dandadan.gif",
    title: "Dandadan", episodes: "6 Episodes", genres: ["Offbeat", "Irreverent"],
  },
  { img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/bc5934e65dcfc3e6f1f783160ce023fb.jpg", 
    hoverImg: "https://media1.tenor.com/m/pPtKViokf2oAAAAd/blue-lock-nagi-seishiro.gif",
    title: "Blue Lock", episodes: "2 Seasons", genres: ["Inspiring", "Drama Anime"],
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:2000/1*6g0DW6WPqyI43bagLvgscw.png",
    hoverImg: "https://media1.tenor.com/m/scfAG7QPodkAAAAd/peeking-pope-heyward.gif",
    title: "Outer Banks", episodes: "4 Seasons", genres: ["Suspeneful", "Exciting"],
  },
  {
    img: "https://hipermediaciones.com/wp-content/uploads/2013/10/21225_breaking_bad.jpg?w=1000",
    hoverImg: "https://media1.tenor.com/m/X0AhE2fo0MwAAAAd/walter-white-walter.gif",
    title: "Breaking Bad", episodes: "5 Seasons", genres: ["Violent", "Gritty"],
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/fe1c0138b7b0e05ea22a711f44e57cd80cfbaea30745c425b7043d786ba66cd1.jpg",
    hoverImg: "https://media1.tenor.com/m/WxG37gS6nX4AAAAd/bettercallsaul-better-call-saul.gif",
    title: "Better Call Saul", episodes: "6 Seasons", genres: ["Crime", "Drama"],
  },
  {
    img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/08/06/17229358331116.png",
    hoverImg: "https://media1.tenor.com/m/PLVLLkZJYmQAAAAd/hn2i-hn2i_.gif",
    title: "Prison Break", episodes: "5 Seasons", genres: ["Dark", "Suspenseful"],
  },
  {
    img: "https://material.asset.catchplay.com/SNY-ID-002-A1101/artworks/posters/SNY-ID-002-A1101-P272.jpg?hash=1731154944",
    hoverImg: "https://media1.tenor.com/m/fhMRxJwYm04AAAAd/venom2-venom.gif",
    title: "Venom 2", episodes: "1h 37m", genres: ["Adrenaline Rush", "Slick"],
  },
  {
    img: "https://www.tvn.cl/tvn/site/artic/20240306/imag/foto_0000001420240306103541/Dr_House_Sexta_Temporada.jpg",
    hoverImg: "https://media1.tenor.com/m/eDUo56vr8WAAAAAd/gregory-house-house-md.gif",
    title: "Dr. House", episodes: "8 Seasons", genres: ["Irreverent", "Dark", "Drama"],
  },
  {
    img: "https://i.ytimg.com/vi/gpPvt7DQmK0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADJWMC1juMeh3ZeSvaqwHqHfdGJA",
    hoverImg: "https://media.tenor.com/53JzIxlooycAAAAM/parasaur-giant.gif",
    title: "Lake Placid vs. Anaconda", episodes: "1h 32m", genres: ["Terror", "Action"],
  },
  {
    img: "https://www.rockandpop.cl/wp-content/uploads/2024/08/Foto-web-1-1-jpg.webp",
    hoverImg: "https://media1.tenor.com/m/IAt2eROADMoAAAAd/anaconda-movie-jlo.gif",
    title: "Anaconda", episodes: "1h 29m", genres: ["Adventure", "Terror"],
  },
  {
    img: "https://i.ytimg.com/vi/WizL7xhbmek/hqdefault.jpg",
    hoverImg: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXE1bHI3Y3htZWF0cm5oZjBoYXNxaXd1ankydjQwMzNtaXJ6NGVtMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11feh7z3rzyLGo/giphy.webp",
    title: "Lavalantula", episodes: "1h 23m", genres: ["Terror", "Science Fiction"],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS367CWBl-7gmSpLY40sNpR2MYYYij3P0w3eQ&s",
    hoverImg: "https://media1.tenor.com/m/ApQxgVfsYRcAAAAd/fin-fin-shepard.gif",
    title: "Sharknado", episodes: "1h 26m", genres: ["Sci-Fi", "Terror"],
  },

];



// Carrusel 7
const carouselItems7 = [
  { img: "https://wallpapersbq.com/images/dandadan-netflix/dandadan-netflix-wallpaper-5.webp", 
    hoverImg: "https://media1.tenor.com/m/ZOhDt9bmFTQAAAAd/dandadan-anime-dandadan.gif",
    title: "Dandadan", episodes: "6 Episodes", genres: ["Offbeat", "Irreverent"],
  },
  { img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/bc5934e65dcfc3e6f1f783160ce023fb.jpg", 
    hoverImg: "https://media1.tenor.com/m/pPtKViokf2oAAAAd/blue-lock-nagi-seishiro.gif",
    title: "Blue Lock", episodes: "2 Seasons", genres: ["Inspiring", "Drama Anime"],
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:2000/1*6g0DW6WPqyI43bagLvgscw.png",
    hoverImg: "https://media1.tenor.com/m/scfAG7QPodkAAAAd/peeking-pope-heyward.gif",
    title: "Outer Banks", episodes: "4 Seasons", genres: ["Suspeneful", "Exciting"],
  },
  {
    img: "https://hipermediaciones.com/wp-content/uploads/2013/10/21225_breaking_bad.jpg?w=1000",
    hoverImg: "https://media1.tenor.com/m/X0AhE2fo0MwAAAAd/walter-white-walter.gif",
    title: "Breaking Bad", episodes: "5 Seasons", genres: ["Violent", "Gritty"],
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/fe1c0138b7b0e05ea22a711f44e57cd80cfbaea30745c425b7043d786ba66cd1.jpg",
    hoverImg: "https://media1.tenor.com/m/WxG37gS6nX4AAAAd/bettercallsaul-better-call-saul.gif",
    title: "Better Call Saul", episodes: "6 Seasons", genres: ["Crime", "Drama"],
  },
  {
    img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/08/06/17229358331116.png",
    hoverImg: "https://media1.tenor.com/m/PLVLLkZJYmQAAAAd/hn2i-hn2i_.gif",
    title: "Prison Break", episodes: "5 Seasons", genres: ["Dark", "Suspenseful"],
  },
  {
    img: "https://material.asset.catchplay.com/SNY-ID-002-A1101/artworks/posters/SNY-ID-002-A1101-P272.jpg?hash=1731154944",
    hoverImg: "https://media1.tenor.com/m/fhMRxJwYm04AAAAd/venom2-venom.gif",
    title: "Venom 2", episodes: "1h 37m", genres: ["Adrenaline Rush", "Slick"],
  },
  {
    img: "https://www.tvn.cl/tvn/site/artic/20240306/imag/foto_0000001420240306103541/Dr_House_Sexta_Temporada.jpg",
    hoverImg: "https://media1.tenor.com/m/eDUo56vr8WAAAAAd/gregory-house-house-md.gif",
    title: "Dr. House", episodes: "8 Seasons", genres: ["Irreverent", "Dark", "Drama"],
  },
  {
    img: "https://i.ytimg.com/vi/gpPvt7DQmK0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADJWMC1juMeh3ZeSvaqwHqHfdGJA",
    hoverImg: "https://media.tenor.com/53JzIxlooycAAAAM/parasaur-giant.gif",
    title: "Lake Placid vs. Anaconda", episodes: "1h 32m", genres: ["Terror", "Action"],
  },
  {
    img: "https://www.rockandpop.cl/wp-content/uploads/2024/08/Foto-web-1-1-jpg.webp",
    hoverImg: "https://media1.tenor.com/m/IAt2eROADMoAAAAd/anaconda-movie-jlo.gif",
    title: "Anaconda", episodes: "1h 29m", genres: ["Adventure", "Terror"],
  },
  {
    img: "https://i.ytimg.com/vi/WizL7xhbmek/hqdefault.jpg",
    hoverImg: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXE1bHI3Y3htZWF0cm5oZjBoYXNxaXd1ankydjQwMzNtaXJ6NGVtMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11feh7z3rzyLGo/giphy.webp",
    title: "Lavalantula", episodes: "1h 23m", genres: ["Terror", "Science Fiction"],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS367CWBl-7gmSpLY40sNpR2MYYYij3P0w3eQ&s",
    hoverImg: "https://media1.tenor.com/m/ApQxgVfsYRcAAAAd/fin-fin-shepard.gif",
    title: "Sharknado", episodes: "1h 26m", genres: ["Sci-Fi", "Terror"],
  },

];


// Carrusel 8
const carouselItems8 = [
  { img: "https://wallpapersbq.com/images/dandadan-netflix/dandadan-netflix-wallpaper-5.webp", 
    hoverImg: "https://media1.tenor.com/m/ZOhDt9bmFTQAAAAd/dandadan-anime-dandadan.gif",
    title: "Dandadan", episodes: "6 Episodes", genres: ["Offbeat", "Irreverent"],
  },
  { img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/bc5934e65dcfc3e6f1f783160ce023fb.jpg", 
    hoverImg: "https://media1.tenor.com/m/pPtKViokf2oAAAAd/blue-lock-nagi-seishiro.gif",
    title: "Blue Lock", episodes: "2 Seasons", genres: ["Inspiring", "Drama Anime"],
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:2000/1*6g0DW6WPqyI43bagLvgscw.png",
    hoverImg: "https://media1.tenor.com/m/scfAG7QPodkAAAAd/peeking-pope-heyward.gif",
    title: "Outer Banks", episodes: "4 Seasons", genres: ["Suspeneful", "Exciting"],
  },
  {
    img: "https://hipermediaciones.com/wp-content/uploads/2013/10/21225_breaking_bad.jpg?w=1000",
    hoverImg: "https://media1.tenor.com/m/X0AhE2fo0MwAAAAd/walter-white-walter.gif",
    title: "Breaking Bad", episodes: "5 Seasons", genres: ["Violent", "Gritty"],
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/fe1c0138b7b0e05ea22a711f44e57cd80cfbaea30745c425b7043d786ba66cd1.jpg",
    hoverImg: "https://media1.tenor.com/m/WxG37gS6nX4AAAAd/bettercallsaul-better-call-saul.gif",
    title: "Better Call Saul", episodes: "6 Seasons", genres: ["Crime", "Drama"],
  },
  {
    img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/08/06/17229358331116.png",
    hoverImg: "https://media1.tenor.com/m/PLVLLkZJYmQAAAAd/hn2i-hn2i_.gif",
    title: "Prison Break", episodes: "5 Seasons", genres: ["Dark", "Suspenseful"],
  },
  {
    img: "https://material.asset.catchplay.com/SNY-ID-002-A1101/artworks/posters/SNY-ID-002-A1101-P272.jpg?hash=1731154944",
    hoverImg: "https://media1.tenor.com/m/fhMRxJwYm04AAAAd/venom2-venom.gif",
    title: "Venom 2", episodes: "1h 37m", genres: ["Adrenaline Rush", "Slick"],
  },
  {
    img: "https://www.tvn.cl/tvn/site/artic/20240306/imag/foto_0000001420240306103541/Dr_House_Sexta_Temporada.jpg",
    hoverImg: "https://media1.tenor.com/m/eDUo56vr8WAAAAAd/gregory-house-house-md.gif",
    title: "Dr. House", episodes: "8 Seasons", genres: ["Irreverent", "Dark", "Drama"],
  },
  {
    img: "https://i.ytimg.com/vi/gpPvt7DQmK0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADJWMC1juMeh3ZeSvaqwHqHfdGJA",
    hoverImg: "https://media.tenor.com/53JzIxlooycAAAAM/parasaur-giant.gif",
    title: "Lake Placid vs. Anaconda", episodes: "1h 32m", genres: ["Terror", "Action"],
  },
  {
    img: "https://www.rockandpop.cl/wp-content/uploads/2024/08/Foto-web-1-1-jpg.webp",
    hoverImg: "https://media1.tenor.com/m/IAt2eROADMoAAAAd/anaconda-movie-jlo.gif",
    title: "Anaconda", episodes: "1h 29m", genres: ["Adventure", "Terror"],
  },
  {
    img: "https://i.ytimg.com/vi/WizL7xhbmek/hqdefault.jpg",
    hoverImg: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXE1bHI3Y3htZWF0cm5oZjBoYXNxaXd1ankydjQwMzNtaXJ6NGVtMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11feh7z3rzyLGo/giphy.webp",
    title: "Lavalantula", episodes: "1h 23m", genres: ["Terror", "Science Fiction"],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS367CWBl-7gmSpLY40sNpR2MYYYij3P0w3eQ&s",
    hoverImg: "https://media1.tenor.com/m/ApQxgVfsYRcAAAAd/fin-fin-shepard.gif",
    title: "Sharknado", episodes: "1h 26m", genres: ["Sci-Fi", "Terror"],
  },

];

// Carrusel 9
const carouselItems9 = [
  { img: "https://wallpapersbq.com/images/dandadan-netflix/dandadan-netflix-wallpaper-5.webp", 
    hoverImg: "https://media1.tenor.com/m/ZOhDt9bmFTQAAAAd/dandadan-anime-dandadan.gif",
    title: "Dandadan", episodes: "6 Episodes", genres: ["Offbeat", "Irreverent"],
  },
  { img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/bc5934e65dcfc3e6f1f783160ce023fb.jpg", 
    hoverImg: "https://media1.tenor.com/m/pPtKViokf2oAAAAd/blue-lock-nagi-seishiro.gif",
    title: "Blue Lock", episodes: "2 Seasons", genres: ["Inspiring", "Drama Anime"],
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:2000/1*6g0DW6WPqyI43bagLvgscw.png",
    hoverImg: "https://media1.tenor.com/m/scfAG7QPodkAAAAd/peeking-pope-heyward.gif",
    title: "Outer Banks", episodes: "4 Seasons", genres: ["Suspeneful", "Exciting"],
  },
  {
    img: "https://hipermediaciones.com/wp-content/uploads/2013/10/21225_breaking_bad.jpg?w=1000",
    hoverImg: "https://media1.tenor.com/m/X0AhE2fo0MwAAAAd/walter-white-walter.gif",
    title: "Breaking Bad", episodes: "5 Seasons", genres: ["Violent", "Gritty"],
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/fe1c0138b7b0e05ea22a711f44e57cd80cfbaea30745c425b7043d786ba66cd1.jpg",
    hoverImg: "https://media1.tenor.com/m/WxG37gS6nX4AAAAd/bettercallsaul-better-call-saul.gif",
    title: "Better Call Saul", episodes: "6 Seasons", genres: ["Crime", "Drama"],
  },
  {
    img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/08/06/17229358331116.png",
    hoverImg: "https://media1.tenor.com/m/PLVLLkZJYmQAAAAd/hn2i-hn2i_.gif",
    title: "Prison Break", episodes: "5 Seasons", genres: ["Dark", "Suspenseful"],
  },
  {
    img: "https://material.asset.catchplay.com/SNY-ID-002-A1101/artworks/posters/SNY-ID-002-A1101-P272.jpg?hash=1731154944",
    hoverImg: "https://media1.tenor.com/m/fhMRxJwYm04AAAAd/venom2-venom.gif",
    title: "Venom 2", episodes: "1h 37m", genres: ["Adrenaline Rush", "Slick"],
  },
  {
    img: "https://www.tvn.cl/tvn/site/artic/20240306/imag/foto_0000001420240306103541/Dr_House_Sexta_Temporada.jpg",
    hoverImg: "https://media1.tenor.com/m/eDUo56vr8WAAAAAd/gregory-house-house-md.gif",
    title: "Dr. House", episodes: "8 Seasons", genres: ["Irreverent", "Dark", "Drama"],
  },
  {
    img: "https://i.ytimg.com/vi/gpPvt7DQmK0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADJWMC1juMeh3ZeSvaqwHqHfdGJA",
    hoverImg: "https://media.tenor.com/53JzIxlooycAAAAM/parasaur-giant.gif",
    title: "Lake Placid vs. Anaconda", episodes: "1h 32m", genres: ["Terror", "Action"],
  },
  {
    img: "https://www.rockandpop.cl/wp-content/uploads/2024/08/Foto-web-1-1-jpg.webp",
    hoverImg: "https://media1.tenor.com/m/IAt2eROADMoAAAAd/anaconda-movie-jlo.gif",
    title: "Anaconda", episodes: "1h 29m", genres: ["Adventure", "Terror"],
  },
  {
    img: "https://i.ytimg.com/vi/WizL7xhbmek/hqdefault.jpg",
    hoverImg: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXE1bHI3Y3htZWF0cm5oZjBoYXNxaXd1ankydjQwMzNtaXJ6NGVtMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11feh7z3rzyLGo/giphy.webp",
    title: "Lavalantula", episodes: "1h 23m", genres: ["Terror", "Science Fiction"],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS367CWBl-7gmSpLY40sNpR2MYYYij3P0w3eQ&s",
    hoverImg: "https://media1.tenor.com/m/ApQxgVfsYRcAAAAd/fin-fin-shepard.gif",
    title: "Sharknado", episodes: "1h 26m", genres: ["Sci-Fi", "Terror"],
  },

];




export default function Home() {
  return (
    <>
      
      <NetflixNavbar/>
      <div style={{ paddingTop: '64px' }}></div>     
      <Header/>
      

      <Continue title="Continue Watching for Diego" 
      img1="https://ntvb.tmsimg.com/assets/p20738391_b_h10_aa.jpg?w=960&h=540" 
      img2="https://fhsnixnews.com/wp-content/uploads/2023/02/office-900x506.png" 
      img3="https://www.generacionfriki.es/wp-content/uploads/2019/10/Neon-Genesis-Evangelion-Generacion-Friki-PORTADA.jpg" 
      img4="https://www.thenewshouse.com/wp-content/uploads/Untitled-design-4.png" 
      img5="https://i.blogs.es/ed157d/230317-deathnote/1366_2000.jpg" 
      img6="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUjszGh751A2Qv0FAIdj7Ew4HW4AR50ktpTLbOeSnZT4ozEMw6ChEgySTFKKOLIzjT35Zj8aSnNLD31CzX21uP9B-E95gqD9-avzZksoK3T4UVafrjXSFnScwWydEvAQydqAwbjAXlMdHN/s1600/brooklyn-nine-nine-poster.jpg" 
      img7="https://www.fetchtv.com.au/v2/vod/titles/46743/landscape_thumbnail/334x188" 
      img8="https://m.media-amazon.com/images/S/pv-target-images/5315a3ca4dd88b439299f2f618f27986d9eb7a0a8768a6783c781db2361574d3.jpg" 
      img9="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyEt77LQDNRrFsbobMO1jOE5oR112RijRyQ&s" 
      img10="https://www.victorsancho.com/wp-content/uploads/2020/07/poster-6-1024x576.jpg" 
      img11="https://i.ytimg.com/vi/D4qoxQamZ1w/maxresdefault.jpg" 
      img12="https://i0.wp.com/www.cinegeek.net/wp-content/uploads/2024/07/Demon-Slayer-Kimetsu-no-Yaiba-Infinity-Castle.png?fit=1200%2C675&ssl=1"
      />

      
      {/* Carrusel con elementos */}
      <ScrollableCarousel title="Recommended for You" items={carouselItems} />
      <ScrollableCarousel title="30-Minute Laughs" items={carouselItems2} />
      <ScrollableCarousel title="Familiar TV Favorites" items={carouselItems3} />
      <ScrollableCarousel title="New on Netflix" items={carouselItems4} />
      <ScrollableCarousel title="Award-Winning TV Shows" items={carouselItems5} />
      <ScrollableCarousel title="Comedy Movies" items={carouselItems6} />
      <ScrollableCarousel title="TV Comedies" items={carouselItems7} />
      <ScrollableCarousel title="Watch it Again" items={carouselItems8} />
      

      <link rel="icon" href="https://w7.pngwing.com/pngs/470/639/png-transparent-warhammer-40-000-space-marine-inquisitor-warhammer-fantasy-battle-inquisition-symbol-miscellaneous-emblem-warhammer-40000-thumbnail.png" type="image/png"></link>



    </>
  );
}
