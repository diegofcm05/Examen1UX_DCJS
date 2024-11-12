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
import FooterSct from "./Componentes/FooterSct";

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


//Primero, aqui se encuentran las definiciones de los elementos de cada carrusel.
//Cada serie contiene una imagen, preview, titulo, episodios/temporadas y generos

//Continue Watching for Diego - Carrusel con Barras
const ContinueWatchingData = [
  {
    img: "https://ntvb.tmsimg.com/assets/p20738391_b_h10_aa.jpg?w=960&h=540",
    hoverImg: "https://media1.tenor.com/m/VxkgKvB9434AAAAd/sibling-brawl-jinx.gif",
    title: "Arcane", episodes: "2 Seasons", genres: ["Slick", "Adevnture"],
  },
  {
    img: "https://fhsnixnews.com/wp-content/uploads/2023/02/office-900x506.png",
    hoverImg: "https://media1.tenor.com/m/ufdy-a4ofb4AAAAd/running.gif",
    title: "The Office", episodes: "9 Seasons", genres: ["Witty", "Funny"],
  },
  {
    img: "https://www.danielcolombo.com/wp-content/uploads/2024/04/serie-suits-foto-promocional.png", 
    hoverImg: "https://media1.tenor.com/m/b497jPjq_HUAAAAd/harvey-specter-mike-ross.gif",
    title: "Suits", episodes: "9 Seasons", genres: ["Court", "Drama"],
  },
  {
    img: "https://ntvb.tmsimg.com/assets/p17580186_b_h8_ak.jpg?w=960&h=540",
    hoverImg: "https://media1.tenor.com/m/wOKLoiaCDkYAAAAd/training-ciri.gif",
    title: "The Witcher", episodes: "3 Seaons", genres: ["Imaginative", "Exciting"],
  },
  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUjszGh751A2Qv0FAIdj7Ew4HW4AR50ktpTLbOeSnZT4ozEMw6ChEgySTFKKOLIzjT35Zj8aSnNLD31CzX21uP9B-E95gqD9-avzZksoK3T4UVafrjXSFnScwWydEvAQydqAwbjAXlMdHN/s1600/brooklyn-nine-nine-poster.jpg", 
    hoverImg: "https://media1.tenor.com/m/BjAnj6PLRkkAAAAd/brooklyn-nine-nine-jake-peralta.gif",
    title: "Brooklyn 99", episodes: "8 Seasons", genres: ["Sitcom", "Workplace"],
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/lost-1549541210.jpg",
    hoverImg: "https://media1.tenor.com/m/FyLTXXAlEooAAAAd/lost-lost-tv-show.gif",
    title: "Lost", episodes: "6 Seaons", genres: ["Emotional", "Exciting"],
  },
  {
    img: "https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0046/4888/el-juego-calamar-squid-game.jpeg?1636858574", 
    hoverImg: "https://media1.tenor.com/m/Uhu0PqYmjl4AAAAd/squid-game.gif",
    title: "Squid Game", episodes: "1 Season", genres: ["Violent", "Suspenseful"],
  },
  {
    img: "https://ntvb.tmsimg.com/assets/p9670463_v_h10_aa.jpg?w=1280&h=720",
    hoverImg: "https://media1.tenor.com/m/EQ4SEVX5emAAAAAd/meme-grown-ups2.gif",
    title: "Grown Ups 2", episodes: "1h 41m", genres: ["Comedy", "Slapstick"],
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/b5ad1cefa202535494b87e3321c64b163552d028c16dfec03491d4d5390118de.jpg", 
    hoverImg: "https://media1.tenor.com/m/g0FZa2HJ5fcAAAAd/nod-sure.gif",
    title: "Superbad", episodes: "1h 53m", genres: ["Raunchy", "Irreverent"],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKU2SUjuuza-ZhQGB6AZBfli5Blgg7orXHw&s", 
    hoverImg: "https://media1.tenor.com/m/_kXRACNRjYQAAAAd/the-big-bang-theory-big-bang-theory.gif",
    title: "The Big Bang Theory", episodes: "12 Seasons", genres: ["Funny", "Comedy"],
  },
  {
    img: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfAEtX-i8L-5L_loJ1_y4lP-duMTM59t3KKC-LkuLP3zbJ7z3g1dg6-CAZQjQdlnwpclg6io55gEeVlNDqN27F2yzNtknAr5fpAU.jpg?r=5c9",
    hoverImg: "https://media1.tenor.com/m/H1Wp3lyr4rYAAAAd/are-we-there-yet-road-trip.gif",
    title: "Are We There Yet?", episodes: "1h 32m", genres: ["Friendship", "Goofy"],
  },
  {
    img: "https://ntvb.tmsimg.com/assets/p14459142_b_h10_aa.jpg?w=1280&h=720",
    hoverImg: "https://media1.tenor.com/m/QG_oNTzUHC8AAAAd/comforting-bojack.gif",
    title: "Bojack Horseman", episodes: "6 Seasons", genres: ["Deadpan", "Dark Comedy"],
  },
];

 // Carrusel 1 - Recommended for You
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

// Carrusel 2 - 30 Minute Laughs
const carouselItems2 = [
  { img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903782-neverhaveiever-review.jpg", 
    hoverImg: "https://media1.tenor.com/m/1JdjL1dEPXYAAAAd/grooving-never-have-i-ever.gif",
    title: "Never Have I Ever", episodes: "4 Seasons", genres: ["Quirky", "Feel-Good"],
  },
  { img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUjszGh751A2Qv0FAIdj7Ew4HW4AR50ktpTLbOeSnZT4ozEMw6ChEgySTFKKOLIzjT35Zj8aSnNLD31CzX21uP9B-E95gqD9-avzZksoK3T4UVafrjXSFnScwWydEvAQydqAwbjAXlMdHN/s1600/brooklyn-nine-nine-poster.jpg", 
    hoverImg: "https://media1.tenor.com/m/BjAnj6PLRkkAAAAd/brooklyn-nine-nine-jake-peralta.gif",
    title: "Brooklyn 99", episodes: "8 Seasons", genres: ["Sitcom", "Workplace"],
  },
  {
    img: "https://fhsnixnews.com/wp-content/uploads/2023/02/office-900x506.png",
    hoverImg: "https://media1.tenor.com/m/ufdy-a4ofb4AAAAd/running.gif",
    title: "The Office", episodes: "9 Seasons", genres: ["Witty", "Funny"],
  },
  {
    img: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/94dd6aeb-8b3b-4fbb-9287-5d2711786e9d/4d9e8c665f41a59003c2f5805071b1114ede7569.jpg?submitted=1684665423050&host=wbd-images.prod-vod.h264.io&partner=beamcom",
    hoverImg: "https://media1.tenor.com/m/LfIGEYSYKCgAAAAd/ballers-bros.gif",
    title: "Ballers", episodes: "5 Seasons", genres: ["Slick", "Dramery"],
  },
  {
    img: "https://lhslance.org/wp-content/uploads/2020/03/OMB-Season-3.jpg",
    hoverImg: "https://media1.tenor.com/m/TTrp-P3baScAAAAd/on-my-block-monse-finnie.gif",
    title: "On My Block", episodes: "4 Seasons", genres: ["Emotional", "Teen"],
  },
  {
    img: "https://www.thebanner.org/sites/default/files/styles/social_media_thumbnail/public/Graphic_2018-10-04_the-good-place.jpg?itok=TXzs9B27",
    hoverImg: "https://media1.tenor.com/m/IsuLggVRrFMAAAAd/im-so-happy-for-you-manny-jacinto.gif",
    title: "The Good Place", episodes: "4 Seasons", genres: ["Quirky", "Sitcom"],
  },
  {
    img: "https://ntvb.tmsimg.com/assets/p14459142_b_h10_aa.jpg?w=1280&h=720",
    hoverImg: "https://media1.tenor.com/m/QG_oNTzUHC8AAAAd/comforting-bojack.gif",
    title: "Bojack Horseman", episodes: "6 Seasons", genres: ["Deadpan", "Dark Comedy"],
  },
  {
    img: "https://theilluminerdi.com/wp-content/uploads/2023/08/Scott-Pilgrim-anime-Revealed.jpg",
    hoverImg: "https://media1.tenor.com/m/SnNtj4m5u40AAAAd/guitar-shredding-scott-pilgrim.gif",
    title: "Scott Pilgrim Takes Off", episodes: "8 Episodes", genres: ["Slick", "Offbeat"],
  },
  {
    img: "https://img4.hulu.com/user/v3/artwork/b8bee743-0210-4bf8-a0bf-8c06bee1ca6e?base_image_bucket_name=image_manager&base_image=83185649-9d7b-47b0-ad5f-35f0b7604a0d&size=1200x630&format=webp&operations=%5B%7B%22gradient_vector%22%3A%22(0%2C0%2C0%2C0.5)%7C(0%2C0%2C0%2C0)%7C(0%2C600)%7C(0%2C240)%22%7D%2C%7B%22overlay%22%3A%7B%22position%22%3A%22SouthEast%7C(30%2C30)%22%2C%22operations%22%3A%5B%7B%22image%22%3A%22image_manager%7C9048dda1-af3b-4b08-b4b6-9aae5d8c239c%22%7D%2C%7B%22resize%22%3A%22204x204%7Cmax%22%7D%2C%7B%22extent%22%3A%22204x204%22%7D%5D%7D%7D%2C%5D",
    hoverImg: "https://media1.tenor.com/m/i7PjvVKc5qAAAAAd/squirrel-carrie-bradshaw.gif",
    title: "Sex and the City", episodes: "6 Seasons", genres: ["Steamy", "Raunchy"],
  },
  {
    img: "https://www.metacritic.com/a/img/resize/d564cb29243cf2fb742e4514f2fcfc4f94b94630/catalog/provider/2/13/2-fab2d26603ef5e206bb5ee67bd76b819.jpg?auto=webp&fit=crop&height=675&width=1200",
    hoverImg: "https://media1.tenor.com/m/p6qHEBDqqX4AAAAd/crash-hit.gif",
    title: "Arrested Development", episodes: "5 Seasons", genres: ["Offbeat", "Dark Comedy"],
  },
  {
    img: "https://ntvb.tmsimg.com/assets/p19369806_b_h8_af.jpg?w=1280&h=720",
    hoverImg: "https://media1.tenor.com/m/ughym5-C-wsAAAAd/surprised-ginny-miller.gif",
    title: "Ginny and Georgia", episodes: "2 Seasons", genres: ["Soapy", "Emotional"],
  },
  {
    img: "https://cdn.mos.cms.futurecdn.net/78p9cUoNYA5U8FqGztGZHM.jpg",
    hoverImg: "https://media1.tenor.com/m/WXYgsZjFNN8AAAAd/goofing-off-erin-naird.gif",
    title: "Space Force", episodes: "2 Seasons", genres: ["Deadpan", "Comedy"],
  },

];


// Carrusel 3 - Familiar TV Favorites
const carouselItems3 = [
  { img: "https://www.danielcolombo.com/wp-content/uploads/2024/04/serie-suits-foto-promocional.png", 
    hoverImg: "https://media1.tenor.com/m/b497jPjq_HUAAAAd/harvey-specter-mike-ross.gif",
    title: "Suits", episodes: "9 Seasons", genres: ["Court", "Drama"],
  },
  { img: "https://media.a24.com/p/c203121bd3be26a2de1fcb20d19f23cc/adjuntos/296/imagenes/009/438/0009438464/1200x675/smart/diseno-titulo-18jpg.jpg", 
    hoverImg: "https://media1.tenor.com/m/PWwNBb4m8mEAAAAd/scared-eleven.gif",
    title: "Stranger Things", episodes: "4 Seasons", genres: ["Ominous", "Scary"],
  },
  {
    img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/money-heist-season-5.jpg",
    hoverImg: "https://media1.tenor.com/m/s_TUR61WcGkAAAAd/shooting-tokyo.gif",
    title: "Money Heist", episodes: "5 Parts", genres: ["Suspeneful", "Exciting"],
  },
  {
    img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/Peaky-Blinders-Cast-and-Character-Guide.jpg",
    hoverImg: "https://media1.tenor.com/m/4-EGhEtQuJYAAAAd/focused-lets-fight.gif",
    title: "Peaky Blinders", episodes: "6 Seasons", genres: ["Violent", "Drama"],
  },
  {
    img: "https://wallpapercat.com/w/full/a/1/0/2197303-2000x1125-desktop-hd-the-flash-tv-series-background-photo.jpg",
    hoverImg: "https://media1.tenor.com/m/i3qYNLr4NmcAAAAd/fusionanimations-godspeed.gif",
    title: "The Flash", episodes: "9 Seasons", genres: ["Adrenaline Rush", "Exciting"],
  },
  {
    img: "https://caracolinternacional.com/wp-content/uploads/2024/04/Pablo-Escobar-el-patron-del-mal.jpg",
    hoverImg: "https://media1.tenor.com/m/SuM-24RMfuIAAAAd/narcos-pablo-escobar.gif",
    title: "Pablo Escobar: El Patron del Mal", episodes: "74 Episodes", genres: ["Crime", "Drama"],
  },
  {
    img: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/08/25/61263c9169c36.jpeg",
    hoverImg: "https://media1.tenor.com/m/wDN6sK1wBZ0AAAAd/looking-down-to-top-ruby-matthews.gif",
    title: "Sex Education", episodes: "4 Seasons", genres: ["Raunchy", "BitterSweet"],
  },
  {
    img: "https://media.airedesantafe.com.ar/p/59014d91082ed3e43ce5f98740f138ed/adjuntos/268/imagenes/003/507/0003507223/diseno-titulo-32png.png",
    hoverImg: "https://media1.tenor.com/m/mmNXXMo1YEYAAAAd/javier-pe%C3%B1a-javier-pena.gif",
    title: "Narcos", episodes: "3 Seasons", genres: ["Dark", "Suspenseful"],
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/lost-1549541210.jpg",
    hoverImg: "https://media1.tenor.com/m/FyLTXXAlEooAAAAd/lost-lost-tv-show.gif",
    title: "Lost", episodes: "6 Seaons", genres: ["Emotional", "Exciting"],
  },
  {
    img: "https://i.ytimg.com/vi/Rq60VlFed-E/maxresdefault.jpg",
    hoverImg: "https://media1.tenor.com/m/CchWrL_teu8AAAAd/im-getting-insane-marienne-bellamy.gif",
    title: "You", episodes: "4 Seasons", genres: ["Psycological", "Dark"],
  },
  {
    img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/01/0-YlpLIprIwr-iJezA-1.jpg",
    hoverImg: "https://media1.tenor.com/m/OTPdb-SP9XoAAAAd/lily-brown-gossip-girl.gif",
    title: "Gossip Girl", episodes: "6 Seasons", genres: ["Scandalous"],
  },
  {
    img: "https://ntvb.tmsimg.com/assets/p17580186_b_h8_ak.jpg?w=960&h=540",
    hoverImg: "https://media1.tenor.com/m/wOKLoiaCDkYAAAAd/training-ciri.gif",
    title: "The Witcher", episodes: "3 Seaons", genres: ["Imaginative", "Exciting"],
  },

];


// Carrusel 4 - New on Netflix
const carouselItems4 = [
  { img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/01/scream-poster.jpg", 
    hoverImg: "https://media1.tenor.com/m/rFsH0juCWNUAAAAd/looking-at-each-other-tara-carpenter.gif",
    title: "Scream VI", episodes: "2h 3m", genres: ["Gruesome", "Scary"],
  },
  { img: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaw3Ujf8f2PYKIqyHVeEUL3YrSqqJ2mDsSTcoGGag6g-Jpj-my9RFShXMLKvaUlnAf8P3kMLxAleUZ4wQ6f3eLfVX-lV7dzXFyFUewnWf71utxov13NZ5cPFnHhCiTyZLe0XPjgbuFwvJfJXmA1jmUidTVckGZsVVxPVyzxYaYOGvyqE8m40GL4g4aXTexzgK6q8yQrj2hWZcraEygR2F5kAIB0VYXqx3FahyP-DUeRuls_EgPwkTXExQEY6jP0SfZXWzXGyCRaMyNJCgNGIlAeiI6c1WXhojdTON5QcY0Lb9cTeazQf2iv9cQ.jpg?r=2dc", 
    hoverImg: "https://media1.tenor.com/m/mBnwCyu40uEAAAAd/blood-bank-steven-seagal.gif",
    title: "Bank Under Siege", episodes: "Limited Series", genres: ["Suspenseful", "Thriller"],
  },
  {
    img: "https://ntvb.tmsimg.com/assets/p20738391_b_h10_aa.jpg?w=960&h=540",
    hoverImg: "https://media1.tenor.com/m/VxkgKvB9434AAAAd/sibling-brawl-jinx.gif",
    title: "Arcane", episodes: "2 Seasons", genres: ["Slick", "Adevnture"],
  },
  {
    img: "https://occ-0-8407-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVA2XVbz1jcmiPQSQhExdn6G73FrdCorreFz7skmemSaco4B7fPlh_1xfDeoSIQe_saxxvMwdgeCaMXAJIAJaV6ZT7rGrzeiLgnJJ5Q4-9lKw5DqP_0h0VZwus0AdQSho3GI4Ar3sQ1ccJnYfQSuvmrk2LU5igRr7NpHVqraf-mQgiqAL-ZSqqXwjOwBXBt4W4eG7lRDgSqQPT3Cda5N5SBCJ3-pGhULZIzYzoCUYVFqaqiKrp2RNP7ntBaQL6xPwAxxIGZiBcc33jE7hESgXKZHpHi_ndC-UpckzdbsWZdrC7Xd9cjGfqSxwg.jpg?r=a96",
    hoverImg: "https://media1.tenor.com/m/awEH1uHay9cAAAAd/wave-neil-diamond.gif",
    title: "Meet Me Next Christmas", episodes: "1h 45m", genres: ["Charming", "Feel-Good"],
  },
  {
    img: "https://ovaciones.com/wp-content/uploads/2024/11/Ova-2024-11-07T091336.009.png",
    hoverImg: "https://media1.tenor.com/m/AK27QzC2rKIAAAAd/native-hostiles.gif",
    title: "Pedro Paramo", episodes: "2h 12m", genres: ["Cerebral", "Drama"],
  },
  {
    img: "https://filminformation.com/wp-content/uploads/2024/11/Vijay69_767x430bef506cd-e14e-48e1-bea1-68a06a30c4e2.jpg",
    hoverImg: "https://media1.tenor.com/m/TF8P1vLfctAAAAAd/tadej-poga%C3%A7ar-poga%C3%A7ar.gif",
    title: "Vijay 69", episodes: "1h 52m", genres: ["Heartfelt", "Emotional"],
  },
  {
    img: "https://occ-0-8381-2568.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf6fBoBaaB9pscSpjE8NrZfreue4yVxHrd7dMcBLVw7Q-VR8pofn4FgUOGM6ERLy6f1FtC0RTt4pr60MQocytCZG1se6xhKC-TdjgaZeMP_IZbwF2WSUIMhd9kziA9bVE73FVbeNVmKZIi2AtizR5RCPtF6EzLeSTyDVR91n3iai91Avqu0l01UIH5_BYNzPVIRx_ufrr2FGTkQQq3Gmjs6fSNAiM5PgpYpPytMp4s6LPu7rCZuDNrMgAZtO_e5o60o7c6FFlOETRh0BfmDew96KzX-VszX0FShhVcGbffMAR4vlieZrfRijgA.jpg?r=d80",
    hoverImg: "https://media1.tenor.com/m/wVt9f1SYhSYAAAAd/wilson-days.gif",
    title: "10 Days of a Curious Man", episodes: "1h 50m", genres: ["Mystery", "Suspenseful"],
  },
  {
    img: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/08/06/17229358331116.png",
    hoverImg: "https://media1.tenor.com/m/PLVLLkZJYmQAAAAd/hn2i-hn2i_.gif",
    title: "Prison Break", episodes: "5 Seasons", genres: ["Action", "Dark"],
  },
  {
    img: "https://i0.wp.com/www.cinegeek.net/wp-content/uploads/2024/07/Demon-Slayer-Kimetsu-no-Yaiba-Infinity-Castle.png?fit=1200%2C675&ssl=1",
    hoverImg: "https://media1.tenor.com/m/tiK7Z3L4zdkAAAAd/muzan-demonslayer.gif",
    title: "Demon Slayer: Infinity Castle", episodes: "5 Seasons", genres: ["Imaginative", "Fantasy Anime"],
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:1400/0*a3q8loo8FNe7ihpl",
    hoverImg: "https://media1.tenor.com/m/t3WjssDatNYAAAAd/nic-nevin-the-resident.gif",
    title: "The Resident", episodes: "6 Seasons", genres: ["Drama", "Medical"],
  },
  {
    img: "https://film-authority.com/wp-content/uploads/2024/09/Rebel-ridge-2024-netflix-review-e1726300843690.jpg",
    hoverImg: "https://media1.tenor.com/m/-QxNictSxMsAAAAd/carrying-you-terry-richmond.gif",
    title: "Rebel Ridge", episodes: "2h 11m", genres: ["Suspenseful", "Thriller"],
  },
  {
    img: "https://la-lista.com/wp-content/uploads/2024/09/dragon-ball-daima-opening.jpg",
    hoverImg: "https://media1.tenor.com/m/3QgqIao3rL4AAAAd/goku-kid-goku.gif",
    title: "Dragon Ball: Daima", episodes: "5 Episodes", genres: ["Exciting", "Imaginative"],
  },

];


// Carrusel 5 - Award Winning TV Shows
const carouselItems5 = [
  { img: "https://ntvb.tmsimg.com/assets/p14459142_b_h10_aa.jpg?w=1280&h=720",
    hoverImg: "https://media1.tenor.com/m/QG_oNTzUHC8AAAAd/comforting-bojack.gif",
    title: "Bojack Horseman", episodes: "6 Seasons", genres: ["Deadpan", "Dark Comedy"],
  },
  { img: "https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0046/4888/el-juego-calamar-squid-game.jpeg?1636858574", 
    hoverImg: "https://media1.tenor.com/m/Uhu0PqYmjl4AAAAd/squid-game.gif",
    title: "Squid Game", episodes: "1 Season", genres: ["Violent", "Suspenseful"],
  },
  {
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/933E0D6CAF547F41DEB8C66ECE2DC2B7246A6590FF25AEA936859FE934336EB5/scale?width=1200&aspectRatio=1.78&format=webp",
    hoverImg: "https://media1.tenor.com/m/Btpj1XnWHlMAAAAd/rick-grimes-and-daryl-dixon-hug-rick-and-daryl-hug.gif",
    title: "The Walking Dead", episodes: "11 Seasons", genres: ["Dystopian", "Gory"],
  },
  {
    img: "https://ntvb.tmsimg.com/assets/p17580186_b_h8_ak.jpg?w=960&h=540",
    hoverImg: "https://media1.tenor.com/m/wOKLoiaCDkYAAAAd/training-ciri.gif",
    title: "The Witcher", episodes: "3 Seaons", genres: ["Imaginative", "Exciting"],
  },
  {
    img: "https://i0.wp.com/elgeneracionalpost.com/wp-content/uploads/2022/02/portada-ozark.jpeg?resize=696%2C392&ssl=1",
    hoverImg: "https://media1.tenor.com/m/fdHPJqpZp2AAAAAd/uh-huh-yeah.gif",
    title: "Ozark", episodes: "4 Seasons", genres: ["Ominous", "Dark"],
  },
  {
    img: "https://www.bloomingtonsouthoptimist.org/wp-content/uploads/2023/01/wednesday-netflix.jpg",
    hoverImg: "https://media1.tenor.com/m/wnlWfq_gHQcAAAAd/picking-up-the-sword-wednesday-addams.gif",
    title: "Wednesday", episodes: "1 Season", genres: ["Deadpan", "Imaginative"],
  },
  {
    img: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeoI1WI8vH9D2HsaFxjusDHU_NCIY7K7k2lQXDdZc-sxFgydpT7JSEZ6-6AH9mmRu87vH4bN_RaRmY0WL6UABkeX_2pGIPz8L1NzGFXNQ-Zk3k2C-1GKCywhmt-VPcFZ2RD2gQ.jpg?r=972",
    hoverImg: "https://media1.tenor.com/m/KtVeHR7cbvgAAAAd/sword-fight-leif-eriksson.gif",
    title: "Vikings Valhalla", episodes: "3 Seasons", genres: ["Violent", "Dark"],
  },
  {
    img: "https://www.tvinsider.com/wp-content/uploads/2022/09/the-queens-gambit-netflix.jpg",
    hoverImg: "https://media1.tenor.com/m/9AU0K_oyRHwAAAAd/strategizing-anya-taylor-joy.gif",
    title: "The Queen's Gambit", episodes: "Limited Series", genres: ["Cerebral", "Intimate"],
  },
  {
    img: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/08/25/61263c9169c36.jpeg",
    hoverImg: "https://media1.tenor.com/m/wDN6sK1wBZ0AAAAd/looking-down-to-top-ruby-matthews.gif",
    title: "Sex Education", episodes: "4 Seasons", genres: ["Raunchy", "BitterSweet"],
  },
  {
    img: "https://www.cronista.com/files/image/303/303554/5ffe1f7aa64f8.jpg",
    hoverImg: "https://media1.tenor.com/m/b4QaTJWsh9cAAAAd/entering-a-cave-jonas-kahnwald.gif",
    title: "Dark", episodes: "3 Seasons", genres: ["Mind Bending", "Chilling"],
  },
  {
    img: "https://album.mediaset.es/eimg/2020/05/07/xAuicpDgtnJOc5csTFQCF3.jpg?w=1200",
    hoverImg: "https://media1.tenor.com/m/RsEmSkasRLgAAAAd/watching-over-you-the-blacklist.gif",
    title: "Blacklist", episodes: "10 Seasons", genres: ["Psychological", "Exciting"],
  },
  {
    img: "https://i.ytimg.com/vi/0K4S7w82_C8/maxresdefault.jpg",
    hoverImg: "https://media1.tenor.com/m/gxPh9sHD-EoAAAAd/upset-mad.gif",
    title: "House of Cards", episodes: "6 Seasons", genres: ["Cerebral", "Dark"],
  },

];


// Carrusel 6 - Comedy Movies
const carouselItems6 = [
  { img: "https://m.media-amazon.com/images/S/pv-target-images/b5ad1cefa202535494b87e3321c64b163552d028c16dfec03491d4d5390118de.jpg", 
    hoverImg: "https://media1.tenor.com/m/g0FZa2HJ5fcAAAAd/nod-sure.gif",
    title: "Superbad", episodes: "1h 53m", genres: ["Raunchy", "Irreverent"],
  },
  { img: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/0f42da02-25e5-4446-b39c-f44fa854f158/9726ac42-dbca-46d9-be23-271ebf5bce8a?host=wbd-images.prod-vod.h264.io&partner=beamcom", 
    hoverImg: "https://media1.tenor.com/m/AZ5lJ5ip15AAAAAd/burbsnart.gif",
    title: "Grown Ups", episodes: "1h 41m", genres: ["Slapstick", "Goofy"],
  },
  {
    img: "https://ntvb.tmsimg.com/assets/p9670463_v_h10_aa.jpg?w=1280&h=720",
    hoverImg: "https://media1.tenor.com/m/EQ4SEVX5emAAAAAd/meme-grown-ups2.gif",
    title: "Grown Ups 2", episodes: "1h 41m", genres: ["Comedy", "Slapstick"],
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/1f48f95561e08169157c489ccc75d7e70a540cd722ffb2019b5d4361305bd62a.jpg",
    hoverImg: "https://media1.tenor.com/m/Ua8QkZwYhAsAAAAd/adam-sandler-just-go-with-it.gif",
    title: "Just Go With It", episodes: "1h 56m", genres: ["Romantic", "Comedy"],
  },
  {
    img: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfAEtX-i8L-5L_loJ1_y4lP-duMTM59t3KKC-LkuLP3zbJ7z3g1dg6-CAZQjQdlnwpclg6io55gEeVlNDqN27F2yzNtknAr5fpAU.jpg?r=5c9",
    hoverImg: "https://media1.tenor.com/m/H1Wp3lyr4rYAAAAd/are-we-there-yet-road-trip.gif",
    title: "Are We There Yet?", episodes: "1h 32m", genres: ["Friendship", "Goofy"],
  },
  {
    img: "https://i.ytimg.com/vi/HTLPULt0eJ4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAKzS6IUha3OlGzha-bBRSz9wi4lw",
    hoverImg: "https://media1.tenor.com/m/kXP0DiLNz_oAAAAd/jentiecult.gif",
    title: "Scary Movie", episodes: "1h 28m", genres: ["Raunchy", "Comedy"],
  },
  {
    img: "https://thumbnails.cbsig.net/CBS_Production_Entertainment_VMS/2020/07/13/1763149379528/SCAMV2_SAlone_THM_16.9_1920x1080_2708513_1920x1080.jpg",
    hoverImg: "https://media1.tenor.com/m/wv3LqxRJAeMAAAAd/hanson-scary-movie.gif",
    title: "Scary Movie 2", episodes: "1h 23m", genres: ["Terror", "Comedy"],
  },
  {
    img: "https://ntvb.tmsimg.com/assets/p21684644_v_h8_aa.jpg?w=960&h=540",
    hoverImg: "https://media1.tenor.com/m/kzW9-2z_zvkAAAAd/elwrong.gif",
    title: "Hustle", episodes: "1h 58m", genres: ["Rousing", "Inspiring"],
  },
  {
    img: "https://hollywoodsuite.ca/wp-content/uploads/poster/HS901907_poster_1920_1080.jpg",
    hoverImg: "https://media1.tenor.com/m/927DWdSXZ6sAAAAd/the40year-old-virgin-comedy.gif",
    title: "The 40 Year Old Virgin", episodes: "1h 56m", genres: ["Comedy", "Romance"],
  },
  {
    img: "https://occ-0-953-999.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf4HjiLqIMgfMLHG2owmZvNudTw-xrzEfGGjHEMsxuIJ3VPvPoabaD-R4YwWdtEjHgZAe5M3Vf9xQsrjatRSfHMe9woxiF0_5hM.jpg?r=ba5",
    hoverImg: "https://media1.tenor.com/m/Ngk4nbWrQn4AAAAd/hahaha.gif",
    title: "Little Man", episodes: "1h 37m", genres: ["Absurd", "Comedy"],
  },
  {
    img: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/31fc051b-f4d1-426b-a07a-7f5897775e8e/1a86b1c1-8c6a-4e08-a01e-a823a8126fa7?host=wbd-images.prod-vod.h264.io&partner=beamcom",
    hoverImg: "https://media1.tenor.com/m/-BfaHKz1eZ4AAAAC/bathing-suit.gif",
    title: "Baywatch", episodes: "1h 57m", genres: ["Absurd", "Raunchy"],
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/a65da805e06a74e57c49bc73c0a2676356e713c42123a4ea94a272f303e33411.jpg",
    hoverImg: "https://media1.tenor.com/m/UgaULGDsBFsAAAAd/wayan-brothers-picking-outfit.gif",
    title: "Don't Be a Menace", episodes: "1h 34m", genres: ["Comedy", "Mystery"],
  },

];



// Carrusel 7 - TV Comedies
const carouselItems7 = [
  { img: "https://www.debate.com.mx/__export/1698600791542/sites/debate/img/2023/10/29/friends.jpg_759710130.jpg", 
    hoverImg: "https://media1.tenor.com/m/7SV5rEqcb6cAAAAd/friends-friendstv.gif",
    title: "Friends", episodes: "10 Seasons", genres: ["Sitcom"],
  },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKU2SUjuuza-ZhQGB6AZBfli5Blgg7orXHw&s", 
    hoverImg: "https://media1.tenor.com/m/_kXRACNRjYQAAAAd/the-big-bang-theory-big-bang-theory.gif",
    title: "The Big Bang Theory", episodes: "12 Seasons", genres: ["Funny", "Comedy"],
  },
  {
    img: "https://www.infobae.com/new-resizer/AaMRNoUlZWx3z_H6IDdvoIbLqGo=/arc-anglerfish-arc2-prod-infobae/public/LWTOV4ZHVZHUXIEYCSOMJZCO6E.jpg",
    hoverImg: "https://media1.tenor.com/m/Kr9rT15CfW0AAAAd/icarly-icarly-interesting.gif",
    title: "iCarly", episodes: "39 Episodes", genres: ["Sitcom", "Girl Power"],
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuoa1T0F1rrj8IJCF5auxG53bMCNw_dzBN-Q&s",
    hoverImg: "https://media1.tenor.com/m/7KNDzj_4XvUAAAAd/jessie-bertram.gif",
    title: "Jessie", episodes: "4 Seasons", genres: ["Sitcom"],
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/4e816706533e0ac4bde098734beca15ad6f064320448fa69e826ca25dc1ff4a0.jpg",
    hoverImg: "https://media1.tenor.com/m/_KLJ82k87r8AAAAd/two-and-a-half-men-charlie-harper.gif",
    title: "Two and a Half Men", episodes: "12 Seasons", genres: ["Comedy", "Romance"],
  },
  {
    img: "https://media.wired.com/photos/5932b50cf682204f736976d3/master/pass/goodluckcharlie.png",
    hoverImg: "https://media1.tenor.com/m/CnXp1B37wJYAAAAd/good-luck-charlie.gif",
    title: "Good Luck, Charlie!", episodes: "4 Seasons", genres: ["Comedy", "Sitcom"],
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/d6f074a38d0e2e5b7c4d36ff7a9c26dd98333acb59903cc9178a0d68ac6d1029.jpg",
    hoverImg: "https://media1.tenor.com/m/4TJq5UaKj88AAAAd/cheering-kenny-mccormick.gif",
    title: "South Park", episodes: "26 Seasons", genres: ["Satire", "Teen"],
  },
  {
    img: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/55C30AB708F874B3ABC22601C07D909C714AFEE9818C2F43C25007D8A6665B24/scale?width=1200&aspectRatio=1.78&format=webp",
    hoverImg: "https://media1.tenor.com/m/6uPXAvYxkNwAAAAC/the-simpsons-homer-simpson.gif",
    title: "The Simpsons", episodes: "36 Seasons", genres: ["Satire", "Comedy"],
  },
  {
    img: "https://i.ytimg.com/vi/bQo6Q7hNG8Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCPyqbL25zr6bKScjxYWh2ZTNvCKg",
    hoverImg: "https://media1.tenor.com/m/S8jMiF-8llEAAAAd/rick-and.gif",
    title: "Rick and Morty", episodes: "7 Seasons", genres: ["Sci-Fi", "Adult"],
  },
  {
    img: "https://pbs.twimg.com/media/GLyJBjgWEAAFOPt.jpg:large",
    hoverImg: "https://media1.tenor.com/m/ZHZnoasyyiQAAAAd/kiss-nervous.gif",
    title: "Big Mouth", episodes: "7 Seasons", genres: ["Witty", "Adult Animation"],
  },
  {
    img: "https://ntvb.tmsimg.com/assets/p7896129_b_h8_aa.jpg?w=1280&h=720",
    hoverImg: "https://media1.tenor.com/m/wXyZNkwNIYoAAAAd/bryan-cranston-breaking-bad.gif",
    title: "Malcolm in the Middle", episodes: "7 Seasons", genres: ["Sitcom"],
  },
  {
    img: "https://m.media-amazon.com/images/S/pv-target-images/18c68ca29eca1852650e32e08aba1adfcf65db43f1f8cb274a9f20115ccd8f36._SX1080_FMjpg_.jpg",
    hoverImg: "https://media1.tenor.com/m/wmi2cw4pUqEAAAAd/attack-spongebob-squarepants.gif",
    title: "Spongebob Squarepants", episodes: "14 Seasons", genres: ["Comedy", "Cartoon"],
  },

];


// Carrusel 8 - Watch it Again
const carouselItems8 = [
  { img: "https://media.airedesantafe.com.ar/p/59014d91082ed3e43ce5f98740f138ed/adjuntos/268/imagenes/003/507/0003507223/diseno-titulo-32png.png",
    hoverImg: "https://media1.tenor.com/m/mmNXXMo1YEYAAAAd/javier-pe%C3%B1a-javier-pena.gif",
    title: "Narcos", episodes: "3 Seasons", genres: ["Dark", "Suspenseful"],
  },
  { 
    img: "https://hipermediaciones.com/wp-content/uploads/2013/10/21225_breaking_bad.jpg?w=1000",
    hoverImg: "https://media1.tenor.com/m/X0AhE2fo0MwAAAAd/walter-white-walter.gif",
    title: "Breaking Bad", episodes: "5 Seasons", genres: ["Violent", "Gritty"],
  },
  {
    img: "https://theilluminerdi.com/wp-content/uploads/2023/08/Scott-Pilgrim-anime-Revealed.jpg",
    hoverImg: "https://media1.tenor.com/m/SnNtj4m5u40AAAAd/guitar-shredding-scott-pilgrim.gif",
    title: "Scott Pilgrim Takes Off", episodes: "8 Episodes", genres: ["Slick", "Offbeat"],
  },
  {
    img: "https://ntvb.tmsimg.com/assets/p19369806_b_h8_af.jpg?w=1280&h=720",
    hoverImg: "https://media1.tenor.com/m/ughym5-C-wsAAAAd/surprised-ginny-miller.gif",
    title: "Ginny and Georgia", episodes: "2 Seasons", genres: ["Soapy", "Emotional"],
  },
  {
    img: "https://www.bloomingtonsouthoptimist.org/wp-content/uploads/2023/01/wednesday-netflix.jpg",
    hoverImg: "https://media1.tenor.com/m/wnlWfq_gHQcAAAAd/picking-up-the-sword-wednesday-addams.gif",
    title: "Wednesday", episodes: "1 Season", genres: ["Deadpan", "Imaginative"],
  },
  {
    img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/Peaky-Blinders-Cast-and-Character-Guide.jpg",
    hoverImg: "https://media1.tenor.com/m/4-EGhEtQuJYAAAAd/focused-lets-fight.gif",
    title: "Peaky Blinders", episodes: "6 Seasons", genres: ["Violent", "Drama"],
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:1400/0*a3q8loo8FNe7ihpl",
    hoverImg: "https://media1.tenor.com/m/t3WjssDatNYAAAAd/nic-nevin-the-resident.gif",
    title: "The Resident", episodes: "6 Seasons", genres: ["Drama", "Medical"],
  },
  {
    img: "https://i.ytimg.com/vi/Rq60VlFed-E/maxresdefault.jpg",
    hoverImg: "https://media1.tenor.com/m/CchWrL_teu8AAAAd/im-getting-insane-marienne-bellamy.gif",
    title: "You", episodes: "4 Seasons", genres: ["Psycological", "Dark"],
  },
  {
    img: "https://www.tvinsider.com/wp-content/uploads/2022/09/the-queens-gambit-netflix.jpg",
    hoverImg: "https://media1.tenor.com/m/9AU0K_oyRHwAAAAd/strategizing-anya-taylor-joy.gif",
    title: "The Queen's Gambit", episodes: "Limited Series", genres: ["Cerebral", "Intimate"],
  },
  {
    img: "https://media.a24.com/p/c203121bd3be26a2de1fcb20d19f23cc/adjuntos/296/imagenes/009/438/0009438464/1200x675/smart/diseno-titulo-18jpg.jpg", 
    hoverImg: "https://media1.tenor.com/m/PWwNBb4m8mEAAAAd/scared-eleven.gif",
    title: "Stranger Things", episodes: "4 Seasons", genres: ["Ominous", "Scary"],
  },
  {
    img: "https://www.tvn.cl/tvn/site/artic/20240306/imag/foto_0000001420240306103541/Dr_House_Sexta_Temporada.jpg",
    hoverImg: "https://media1.tenor.com/m/eDUo56vr8WAAAAAd/gregory-house-house-md.gif",
    title: "Dr. House", episodes: "8 Seasons", genres: ["Irreverent", "Dark", "Drama"],
  },
  {
    img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/Peaky-Blinders-Cast-and-Character-Guide.jpg",
    hoverImg: "https://media1.tenor.com/m/4-EGhEtQuJYAAAAd/focused-lets-fight.gif",
    title: "Peaky Blinders", episodes: "6 Seasons", genres: ["Violent", "Drama"],
  },

];





//Bienvenida a nuestro examen, Ing. Claudia
export default function Home() {
  return (
    <>
      
      {/*Declaracion de Navbar con padding para que nada se quede stuck debajo*/}
      <NetflixNavbar/>
      <div style={{ paddingTop: '64px' }}></div>     
      <Header/>
      
      {/*Primer Carrusel con Barras abajo*/}
      <Continue title="Continue Watching for Diego" items={ContinueWatchingData}/>

      
      {/*Carruseles con elementos*/}
      <ScrollableCarousel title="Recommended for You" items={carouselItems} />
      <ScrollableCarousel title="30-Minute Laughs" items={carouselItems2} />
      <ScrollableCarousel title="Familiar TV Favorites" items={carouselItems3} />
      <ScrollableCarousel title="New on Netflix" items={carouselItems4} />
      <ScrollableCarousel title="Award-Winning TV Shows" items={carouselItems5} />
      <ScrollableCarousel title="Comedy Movies" items={carouselItems6} />
      <ScrollableCarousel title="TV Comedies" items={carouselItems7} />
      <ScrollableCarousel title="Watch it Again" items={carouselItems8} />

      {/*Definicion de Footer*/}
      <FooterSct/>

      <link rel="icon" href="https://w7.pngwing.com/pngs/470/639/png-transparent-warhammer-40-000-space-marine-inquisitor-warhammer-fantasy-battle-inquisition-symbol-miscellaneous-emblem-warhammer-40000-thumbnail.png" type="image/png"></link>



    </>
  );
}
