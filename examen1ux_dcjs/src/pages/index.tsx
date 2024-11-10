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
      img1="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/04/27/903782-neverhaveiever-review.jpg" 
      img2="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhUjszGh751A2Qv0FAIdj7Ew4HW4AR50ktpTLbOeSnZT4ozEMw6ChEgySTFKKOLIzjT35Zj8aSnNLD31CzX21uP9B-E95gqD9-avzZksoK3T4UVafrjXSFnScwWydEvAQydqAwbjAXlMdHN/s1600/brooklyn-nine-nine-poster.jpg"
      img3="https://fhsnixnews.com/wp-content/uploads/2023/02/office-900x506.png" 
      img4="https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/94dd6aeb-8b3b-4fbb-9287-5d2711786e9d/4d9e8c665f41a59003c2f5805071b1114ede7569.jpg?submitted=1684665423050&host=wbd-images.prod-vod.h264.io&partner=beamcom" 
      img5="https://lhslance.org/wp-content/uploads/2020/03/OMB-Season-3.jpg"
      img6="https://www.thebanner.org/sites/default/files/styles/social_media_thumbnail/public/Graphic_2018-10-04_the-good-place.jpg?itok=TXzs9B27"
      img7="https://ntvb.tmsimg.com/assets/p14459142_b_h10_aa.jpg?w=1280&h=720"
      img8="https://theilluminerdi.com/wp-content/uploads/2023/08/Scott-Pilgrim-anime-Revealed.jpg"
      img9="https://img4.hulu.com/user/v3/artwork/b8bee743-0210-4bf8-a0bf-8c06bee1ca6e?base_image_bucket_name=image_manager&base_image=83185649-9d7b-47b0-ad5f-35f0b7604a0d&size=1200x630&format=webp&operations=%5B%7B%22gradient_vector%22%3A%22(0%2C0%2C0%2C0.5)%7C(0%2C0%2C0%2C0)%7C(0%2C600)%7C(0%2C240)%22%7D%2C%7B%22overlay%22%3A%7B%22position%22%3A%22SouthEast%7C(30%2C30)%22%2C%22operations%22%3A%5B%7B%22image%22%3A%22image_manager%7C9048dda1-af3b-4b08-b4b6-9aae5d8c239c%22%7D%2C%7B%22resize%22%3A%22204x204%7Cmax%22%7D%2C%7B%22extent%22%3A%22204x204%22%7D%5D%7D%7D%2C%5D"
      img10="https://www.metacritic.com/a/img/resize/d564cb29243cf2fb742e4514f2fcfc4f94b94630/catalog/provider/2/13/2-fab2d26603ef5e206bb5ee67bd76b819.jpg?auto=webp&fit=crop&height=675&width=1200"
      img11="https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSq5W-yUnbo9ZZ-grKG6A-wECOy3J1SK1J-DbA3r2m3mjT683YEa3q4s9bkkGVb8oZMTHaxwgHgbHcloFvDdgSl5ejC9xhXArW2m.jpg?r=94e" 
      img12="https://cdn.mos.cms.futurecdn.net/78p9cUoNYA5U8FqGztGZHM.jpg"
      />
      <Carousel title="Familiar TV Favorites" 
      img1="https://www.danielcolombo.com/wp-content/uploads/2024/04/serie-suits-foto-promocional.png" 
      img2="https://media.a24.com/p/c203121bd3be26a2de1fcb20d19f23cc/adjuntos/296/imagenes/009/438/0009438464/1200x675/smart/diseno-titulo-18jpg.jpg" 
      img3="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/08/money-heist-season-5.jpg" 
      img4="https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/Peaky-Blinders-Cast-and-Character-Guide.jpg" 
      img5="https://wallpapercat.com/w/full/a/1/0/2197303-2000x1125-desktop-hd-the-flash-tv-series-background-photo.jpg" 
      img6="https://caracolinternacional.com/wp-content/uploads/2024/04/Pablo-Escobar-el-patron-del-mal.jpg" 
      img7="https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/08/25/61263c9169c36.jpeg" 
      img8="https://media.airedesantafe.com.ar/p/59014d91082ed3e43ce5f98740f138ed/adjuntos/268/imagenes/003/507/0003507223/diseno-titulo-32png.png" 
      img9="https://hips.hearstapps.com/hmg-prod/images/lost-1549541210.jpg" 
      img10="https://i.ytimg.com/vi/Rq60VlFed-E/maxresdefault.jpg" 
      img11="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/01/0-YlpLIprIwr-iJezA-1.jpg" 
      img12="https://ntvb.tmsimg.com/assets/p17580186_b_h8_ak.jpg?w=960&h=540"
      />
      
      <Carousel title="New on Netflix" 
      img1="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/01/scream-poster.jpg" 
      img2="https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaw3Ujf8f2PYKIqyHVeEUL3YrSqqJ2mDsSTcoGGag6g-Jpj-my9RFShXMLKvaUlnAf8P3kMLxAleUZ4wQ6f3eLfVX-lV7dzXFyFUewnWf71utxov13NZ5cPFnHhCiTyZLe0XPjgbuFwvJfJXmA1jmUidTVckGZsVVxPVyzxYaYOGvyqE8m40GL4g4aXTexzgK6q8yQrj2hWZcraEygR2F5kAIB0VYXqx3FahyP-DUeRuls_EgPwkTXExQEY6jP0SfZXWzXGyCRaMyNJCgNGIlAeiI6c1WXhojdTON5QcY0Lb9cTeazQf2iv9cQ.jpg?r=2dc" 
      img3="https://ntvb.tmsimg.com/assets/p20738391_b_h10_aa.jpg?w=960&h=540" 
      img4="https://occ-0-8407-1722.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVA2XVbz1jcmiPQSQhExdn6G73FrdCorreFz7skmemSaco4B7fPlh_1xfDeoSIQe_saxxvMwdgeCaMXAJIAJaV6ZT7rGrzeiLgnJJ5Q4-9lKw5DqP_0h0VZwus0AdQSho3GI4Ar3sQ1ccJnYfQSuvmrk2LU5igRr7NpHVqraf-mQgiqAL-ZSqqXwjOwBXBt4W4eG7lRDgSqQPT3Cda5N5SBCJ3-pGhULZIzYzoCUYVFqaqiKrp2RNP7ntBaQL6xPwAxxIGZiBcc33jE7hESgXKZHpHi_ndC-UpckzdbsWZdrC7Xd9cjGfqSxwg.jpg?r=a96" 
      img5="https://ovaciones.com/wp-content/uploads/2024/11/Ova-2024-11-07T091336.009.png" 
      img6="https://filminformation.com/wp-content/uploads/2024/11/Vijay69_767x430bef506cd-e14e-48e1-bea1-68a06a30c4e2.jpg" 
      img7="https://occ-0-8381-2568.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf6fBoBaaB9pscSpjE8NrZfreue4yVxHrd7dMcBLVw7Q-VR8pofn4FgUOGM6ERLy6f1FtC0RTt4pr60MQocytCZG1se6xhKC-TdjgaZeMP_IZbwF2WSUIMhd9kziA9bVE73FVbeNVmKZIi2AtizR5RCPtF6EzLeSTyDVR91n3iai91Avqu0l01UIH5_BYNzPVIRx_ufrr2FGTkQQq3Gmjs6fSNAiM5PgpYpPytMp4s6LPu7rCZuDNrMgAZtO_e5o60o7c6FFlOETRh0BfmDew96KzX-VszX0FShhVcGbffMAR4vlieZrfRijgA.jpg?r=d80" 
      img8="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/08/06/17229358331116.png" 
      img9="https://i0.wp.com/www.cinegeek.net/wp-content/uploads/2024/07/Demon-Slayer-Kimetsu-no-Yaiba-Infinity-Castle.png?fit=1200%2C675&ssl=1" 
      img10="https://miro.medium.com/v2/resize:fit:1400/0*a3q8loo8FNe7ihpl" 
      img11="https://film-authority.com/wp-content/uploads/2024/09/Rebel-ridge-2024-netflix-review-e1726300843690.jpg" 
      img12="https://la-lista.com/wp-content/uploads/2024/09/dragon-ball-daima-opening.jpg"
      />
      <Carousel title="Award-Winning TV Shows" 
      img1="https://ntvb.tmsimg.com/assets/p14459142_b_h10_aa.jpg?w=1280&h=720" 
      img2="https://d31dn7nfpuwjnm.cloudfront.net/images/valoraciones/0046/4888/el-juego-calamar-squid-game.jpeg?1636858574" 
      img3="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/933E0D6CAF547F41DEB8C66ECE2DC2B7246A6590FF25AEA936859FE934336EB5/scale?width=1200&aspectRatio=1.78&format=webp" 
      img4="https://ntvb.tmsimg.com/assets/p17580186_b_h8_ak.jpg?w=960&h=540" 
      img5="https://i0.wp.com/elgeneracionalpost.com/wp-content/uploads/2022/02/portada-ozark.jpeg?resize=696%2C392&ssl=1" 
      img6="https://www.bloomingtonsouthoptimist.org/wp-content/uploads/2023/01/wednesday-netflix.jpg" 
      img7="https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABeoI1WI8vH9D2HsaFxjusDHU_NCIY7K7k2lQXDdZc-sxFgydpT7JSEZ6-6AH9mmRu87vH4bN_RaRmY0WL6UABkeX_2pGIPz8L1NzGFXNQ-Zk3k2C-1GKCywhmt-VPcFZ2RD2gQ.jpg?r=972" 
      img8="https://www.tvinsider.com/wp-content/uploads/2022/09/the-queens-gambit-netflix.jpg" 
      img9="https://www.lavanguardia.com/files/og_thumbnail/uploads/2021/08/25/61263c9169c36.jpeg" 
      img10="https://www.cronista.com/files/image/303/303554/5ffe1f7aa64f8.jpg" 
      img11="https://album.mediaset.es/eimg/2020/05/07/xAuicpDgtnJOc5csTFQCF3.jpg?w=1200" 
      img12="https://i.ytimg.com/vi/0K4S7w82_C8/maxresdefault.jpg"
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
