import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import NavbarC from "./Componentes/navbar";
import NetflixNavbar from "./Componentes/navbar";
import Header from "./Componentes/header";
import Carousel from "./Componentes/Carrousel";
import Continue from "./Componentes/ContinueWatching";

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

export default function Home() {
  return (
    <>
      
      <NetflixNavbar/>
      <div style={{ paddingTop: '64px' }}></div>     
      <Header/>
      
      <Continue title="Continue Watching for Don Poulet" 
      img1="https://ntvb.tmsimg.com/assets/p20738391_b_h10_aa.jpg?w=960&h=540" 
      img2="https://fhsnixnews.com/wp-content/uploads/2023/02/office-900x506.png" 
      img3="https://www.generacionfriki.es/wp-content/uploads/2019/10/Neon-Genesis-Evangelion-Generacion-Friki-PORTADA.jpg" 
      img4="https://www.thenewshouse.com/wp-content/uploads/Untitled-design-4.png" 
      img5="https://i.blogs.es/ed157d/230317-deathnote/1366_2000.jpg" 
      img6="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/03/brooklyn-nine-nine-cast.jpg" 
      img7="https://www.fetchtv.com.au/v2/vod/titles/46743/landscape_thumbnail/334x188" 
      img8="https://m.media-amazon.com/images/S/pv-target-images/5315a3ca4dd88b439299f2f618f27986d9eb7a0a8768a6783c781db2361574d3.jpg" 
      img9="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyEt77LQDNRrFsbobMO1jOE5oR112RijRyQ&s" 
      img10="https://www.victorsancho.com/wp-content/uploads/2020/07/poster-6-1024x576.jpg" 
      img11="https://i.ytimg.com/vi/D4qoxQamZ1w/maxresdefault.jpg" 
      img12="https://i0.wp.com/www.cinegeek.net/wp-content/uploads/2024/07/Demon-Slayer-Kimetsu-no-Yaiba-Infinity-Castle.png?fit=1200%2C675&ssl=1"
      />
      <Carousel title="We think you'll love this" 
      img1="https://wallpapersbq.com/images/dandadan-netflix/dandadan-netflix-wallpaper-5.webp" 
      img2="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/bc5934e65dcfc3e6f1f783160ce023fb.jpg" 
      img3="https://miro.medium.com/v2/resize:fit:2000/1*6g0DW6WPqyI43bagLvgscw.png" 
      img4="https://hipermediaciones.com/wp-content/uploads/2013/10/21225_breaking_bad.jpg?w=1000" 
      img5="https://m.media-amazon.com/images/S/pv-target-images/fe1c0138b7b0e05ea22a711f44e57cd80cfbaea30745c425b7043d786ba66cd1.jpg" 
      img6="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/08/06/17229358331116.png" 
      img7="https://material.asset.catchplay.com/SNY-ID-002-A1101/artworks/posters/SNY-ID-002-A1101-P272.jpg?hash=1731154944" 
      img8="https://www.tvn.cl/tvn/site/artic/20240306/imag/foto_0000001420240306103541/Dr_House_Sexta_Temporada.jpg" 
      img9="https://i.ytimg.com/vi/gpPvt7DQmK0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADJWMC1juMeh3ZeSvaqwHqHfdGJA" 
      img10="https://www.rockandpop.cl/wp-content/uploads/2024/08/Foto-web-1-1-jpg.webp" 
      img11="https://i.ytimg.com/vi/WizL7xhbmek/hqdefault.jpg" 
      img12="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS367CWBl-7gmSpLY40sNpR2MYYYij3P0w3eQ&s"
      />
      <Carousel title="30-Minute Laughs" 
      img1="https://store.gkids.com/cdn/shop/files/ARC1_Select_01_1656x700.jpg?v=1720729083" 
      img2="https://m.media-amazon.com/images/S/pv-target-images/0dd8322809f5493fa8c2a8a2bbfe53a1e9960eaab0aac5517296bc9bdfa567ad.jpg" 
      img3="https://www.generacionfriki.es/wp-content/uploads/2019/10/Neon-Genesis-Evangelion-Generacion-Friki-PORTADA.jpg" 
      img4="https://www.thenewshouse.com/wp-content/uploads/Untitled-design-4.png" 
      img5="https://i.blogs.es/ed157d/230317-deathnote/1366_2000.jpg" 
      img6="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/03/brooklyn-nine-nine-cast.jpg" 
      img7="https://www.fetchtv.com.au/v2/vod/titles/46743/landscape_thumbnail/334x188" 
      img8="https://m.media-amazon.com/images/S/pv-target-images/5315a3ca4dd88b439299f2f618f27986d9eb7a0a8768a6783c781db2361574d3.jpg" 
      img9="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyEt77LQDNRrFsbobMO1jOE5oR112RijRyQ&s" 
      img10="https://www.victorsancho.com/wp-content/uploads/2020/07/poster-6-1024x576.jpg" 
      img11="https://i.ytimg.com/vi/D4qoxQamZ1w/maxresdefault.jpg" 
      img12="https://i0.wp.com/www.cinegeek.net/wp-content/uploads/2024/07/Demon-Slayer-Kimetsu-no-Yaiba-Infinity-Castle.png?fit=1200%2C675&ssl=1"
      />
      <Carousel title="Familiar TV Favorites" 
      img1="https://store.gkids.com/cdn/shop/files/ARC1_Select_01_1656x700.jpg?v=1720729083" 
      img2="https://m.media-amazon.com/images/S/pv-target-images/0dd8322809f5493fa8c2a8a2bbfe53a1e9960eaab0aac5517296bc9bdfa567ad.jpg" 
      img3="https://www.generacionfriki.es/wp-content/uploads/2019/10/Neon-Genesis-Evangelion-Generacion-Friki-PORTADA.jpg" 
      img4="https://www.thenewshouse.com/wp-content/uploads/Untitled-design-4.png" 
      img5="https://i.blogs.es/ed157d/230317-deathnote/1366_2000.jpg" 
      img6="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/03/brooklyn-nine-nine-cast.jpg" 
      img7="https://www.fetchtv.com.au/v2/vod/titles/46743/landscape_thumbnail/334x188" 
      img8="https://m.media-amazon.com/images/S/pv-target-images/5315a3ca4dd88b439299f2f618f27986d9eb7a0a8768a6783c781db2361574d3.jpg" 
      img9="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyEt77LQDNRrFsbobMO1jOE5oR112RijRyQ&s" 
      img10="https://www.victorsancho.com/wp-content/uploads/2020/07/poster-6-1024x576.jpg" 
      img11="https://i.ytimg.com/vi/D4qoxQamZ1w/maxresdefault.jpg" 
      img12="https://i0.wp.com/www.cinegeek.net/wp-content/uploads/2024/07/Demon-Slayer-Kimetsu-no-Yaiba-Infinity-Castle.png?fit=1200%2C675&ssl=1"
      />
      <Carousel title="Today's Top Picks for You" 
      img1="https://store.gkids.com/cdn/shop/files/ARC1_Select_01_1656x700.jpg?v=1720729083" 
      img2="https://m.media-amazon.com/images/S/pv-target-images/0dd8322809f5493fa8c2a8a2bbfe53a1e9960eaab0aac5517296bc9bdfa567ad.jpg" 
      img3="https://www.generacionfriki.es/wp-content/uploads/2019/10/Neon-Genesis-Evangelion-Generacion-Friki-PORTADA.jpg" 
      img4="https://www.thenewshouse.com/wp-content/uploads/Untitled-design-4.png" 
      img5="https://i.blogs.es/ed157d/230317-deathnote/1366_2000.jpg" 
      img6="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/03/brooklyn-nine-nine-cast.jpg" 
      img7="https://www.fetchtv.com.au/v2/vod/titles/46743/landscape_thumbnail/334x188" 
      img8="https://m.media-amazon.com/images/S/pv-target-images/5315a3ca4dd88b439299f2f618f27986d9eb7a0a8768a6783c781db2361574d3.jpg" 
      img9="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyEt77LQDNRrFsbobMO1jOE5oR112RijRyQ&s" 
      img10="https://www.victorsancho.com/wp-content/uploads/2020/07/poster-6-1024x576.jpg" 
      img11="https://i.ytimg.com/vi/D4qoxQamZ1w/maxresdefault.jpg" 
      img12="https://i0.wp.com/www.cinegeek.net/wp-content/uploads/2024/07/Demon-Slayer-Kimetsu-no-Yaiba-Infinity-Castle.png?fit=1200%2C675&ssl=1"
      />
      <Carousel title="New on Netflix" 
      img1="https://store.gkids.com/cdn/shop/files/ARC1_Select_01_1656x700.jpg?v=1720729083" 
      img2="https://m.media-amazon.com/images/S/pv-target-images/0dd8322809f5493fa8c2a8a2bbfe53a1e9960eaab0aac5517296bc9bdfa567ad.jpg" 
      img3="https://www.generacionfriki.es/wp-content/uploads/2019/10/Neon-Genesis-Evangelion-Generacion-Friki-PORTADA.jpg" 
      img4="https://www.thenewshouse.com/wp-content/uploads/Untitled-design-4.png" 
      img5="https://i.blogs.es/ed157d/230317-deathnote/1366_2000.jpg" 
      img6="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/03/brooklyn-nine-nine-cast.jpg" 
      img7="https://www.fetchtv.com.au/v2/vod/titles/46743/landscape_thumbnail/334x188" 
      img8="https://m.media-amazon.com/images/S/pv-target-images/5315a3ca4dd88b439299f2f618f27986d9eb7a0a8768a6783c781db2361574d3.jpg" 
      img9="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyEt77LQDNRrFsbobMO1jOE5oR112RijRyQ&s" 
      img10="https://www.victorsancho.com/wp-content/uploads/2020/07/poster-6-1024x576.jpg" 
      img11="https://i.ytimg.com/vi/D4qoxQamZ1w/maxresdefault.jpg" 
      img12="https://i0.wp.com/www.cinegeek.net/wp-content/uploads/2024/07/Demon-Slayer-Kimetsu-no-Yaiba-Infinity-Castle.png?fit=1200%2C675&ssl=1"
      />
      <Carousel title="Award-Winning TV Shows" 
      img1="https://store.gkids.com/cdn/shop/files/ARC1_Select_01_1656x700.jpg?v=1720729083" 
      img2="https://m.media-amazon.com/images/S/pv-target-images/0dd8322809f5493fa8c2a8a2bbfe53a1e9960eaab0aac5517296bc9bdfa567ad.jpg" 
      img3="https://www.generacionfriki.es/wp-content/uploads/2019/10/Neon-Genesis-Evangelion-Generacion-Friki-PORTADA.jpg" 
      img4="https://www.thenewshouse.com/wp-content/uploads/Untitled-design-4.png" 
      img5="https://i.blogs.es/ed157d/230317-deathnote/1366_2000.jpg" 
      img6="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/03/brooklyn-nine-nine-cast.jpg" 
      img7="https://www.fetchtv.com.au/v2/vod/titles/46743/landscape_thumbnail/334x188" 
      img8="https://m.media-amazon.com/images/S/pv-target-images/5315a3ca4dd88b439299f2f618f27986d9eb7a0a8768a6783c781db2361574d3.jpg" 
      img9="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyEt77LQDNRrFsbobMO1jOE5oR112RijRyQ&s" 
      img10="https://www.victorsancho.com/wp-content/uploads/2020/07/poster-6-1024x576.jpg" 
      img11="https://i.ytimg.com/vi/D4qoxQamZ1w/maxresdefault.jpg" 
      img12="https://i0.wp.com/www.cinegeek.net/wp-content/uploads/2024/07/Demon-Slayer-Kimetsu-no-Yaiba-Infinity-Castle.png?fit=1200%2C675&ssl=1"
      />
      <Carousel title="Comedy Movies" 
      img1="https://store.gkids.com/cdn/shop/files/ARC1_Select_01_1656x700.jpg?v=1720729083" 
      img2="https://m.media-amazon.com/images/S/pv-target-images/0dd8322809f5493fa8c2a8a2bbfe53a1e9960eaab0aac5517296bc9bdfa567ad.jpg" 
      img3="https://www.generacionfriki.es/wp-content/uploads/2019/10/Neon-Genesis-Evangelion-Generacion-Friki-PORTADA.jpg" 
      img4="https://www.thenewshouse.com/wp-content/uploads/Untitled-design-4.png" 
      img5="https://i.blogs.es/ed157d/230317-deathnote/1366_2000.jpg" 
      img6="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/03/brooklyn-nine-nine-cast.jpg" 
      img7="https://www.fetchtv.com.au/v2/vod/titles/46743/landscape_thumbnail/334x188" 
      img8="https://m.media-amazon.com/images/S/pv-target-images/5315a3ca4dd88b439299f2f618f27986d9eb7a0a8768a6783c781db2361574d3.jpg" 
      img9="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyEt77LQDNRrFsbobMO1jOE5oR112RijRyQ&s" 
      img10="https://www.victorsancho.com/wp-content/uploads/2020/07/poster-6-1024x576.jpg" 
      img11="https://i.ytimg.com/vi/D4qoxQamZ1w/maxresdefault.jpg" 
      img12="https://i0.wp.com/www.cinegeek.net/wp-content/uploads/2024/07/Demon-Slayer-Kimetsu-no-Yaiba-Infinity-Castle.png?fit=1200%2C675&ssl=1"
      />
      <Carousel title="TV Comedy's" 
      img1="https://store.gkids.com/cdn/shop/files/ARC1_Select_01_1656x700.jpg?v=1720729083" 
      img2="https://m.media-amazon.com/images/S/pv-target-images/0dd8322809f5493fa8c2a8a2bbfe53a1e9960eaab0aac5517296bc9bdfa567ad.jpg" 
      img3="https://www.generacionfriki.es/wp-content/uploads/2019/10/Neon-Genesis-Evangelion-Generacion-Friki-PORTADA.jpg" 
      img4="https://www.thenewshouse.com/wp-content/uploads/Untitled-design-4.png" 
      img5="https://i.blogs.es/ed157d/230317-deathnote/1366_2000.jpg" 
      img6="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/03/brooklyn-nine-nine-cast.jpg" 
      img7="https://www.fetchtv.com.au/v2/vod/titles/46743/landscape_thumbnail/334x188" 
      img8="https://m.media-amazon.com/images/S/pv-target-images/5315a3ca4dd88b439299f2f618f27986d9eb7a0a8768a6783c781db2361574d3.jpg" 
      img9="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyEt77LQDNRrFsbobMO1jOE5oR112RijRyQ&s" 
      img10="https://www.victorsancho.com/wp-content/uploads/2020/07/poster-6-1024x576.jpg" 
      img11="https://i.ytimg.com/vi/D4qoxQamZ1w/maxresdefault.jpg" 
      img12="https://i0.wp.com/www.cinegeek.net/wp-content/uploads/2024/07/Demon-Slayer-Kimetsu-no-Yaiba-Infinity-Castle.png?fit=1200%2C675&ssl=1"
      />
      <Carousel title="Watch it Again" 
      img1="https://store.gkids.com/cdn/shop/files/ARC1_Select_01_1656x700.jpg?v=1720729083" 
      img2="https://m.media-amazon.com/images/S/pv-target-images/0dd8322809f5493fa8c2a8a2bbfe53a1e9960eaab0aac5517296bc9bdfa567ad.jpg" 
      img3="https://www.generacionfriki.es/wp-content/uploads/2019/10/Neon-Genesis-Evangelion-Generacion-Friki-PORTADA.jpg" 
      img4="https://www.thenewshouse.com/wp-content/uploads/Untitled-design-4.png" 
      img5="https://i.blogs.es/ed157d/230317-deathnote/1366_2000.jpg" 
      img6="https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/03/brooklyn-nine-nine-cast.jpg" 
      img7="https://www.fetchtv.com.au/v2/vod/titles/46743/landscape_thumbnail/334x188" 
      img8="https://m.media-amazon.com/images/S/pv-target-images/5315a3ca4dd88b439299f2f618f27986d9eb7a0a8768a6783c781db2361574d3.jpg" 
      img9="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyEt77LQDNRrFsbobMO1jOE5oR112RijRyQ&s" 
      img10="https://www.victorsancho.com/wp-content/uploads/2020/07/poster-6-1024x576.jpg" 
      img11="https://i.ytimg.com/vi/D4qoxQamZ1w/maxresdefault.jpg" 
      img12="https://i0.wp.com/www.cinegeek.net/wp-content/uploads/2024/07/Demon-Slayer-Kimetsu-no-Yaiba-Infinity-Castle.png?fit=1200%2C675&ssl=1"
      />

    </>
  );
}
