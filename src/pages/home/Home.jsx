import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
export default function Body() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="body-container">
      <section className="rewards-section">
        <h2>Transforme resíduos em recompensas</h2>
        <p>
          Na Reciclub, acreditamos que cada pequena ação é importante. Ao reciclar materiais como garrafas PET,
          latas e embalagens, você não só ajuda o meio ambiente, mas também acumula pontos que podem ser trocados
          por prêmios e descontos em lojas parceiras. Junte-se a nós e faça parte de uma comunidade que está
          construindo um futuro mais sustentável, onde os resíduos ganham novo valor e cada reciclagem é uma
          oportunidade de ganhar recompensas.
        </p>
      </section>
      <Slider {...sliderSettings}>
        <div>
          <img
            src="fotos/banner1.jpg"
            className="recycle-image"
            alt="Imagem Reciclube 1"
          />
        </div>
        <div>
          <img
            src="fotos/banner2.png"
            className="recycle-image2"
            alt="Imagem Reciclube 2"
          />
        </div>
        <div>
          <img
            src="fotos/banner3.jpg"
            className="recycle-image3"
            alt="Imagem Reciclube 3"
          />
        </div>
      </Slider>
      <section className="rewards-section2">
        <h2>Acumule pontos e troque por prêmios incríveis!</h2>
        <p>
          Recicle materiais como garrafas PET, vasilhas e latinhas e transforme-os em cupons de desconto, gift cards,
          vouchers e muito mais. Quanto mais você reciclar, mais pontos acumula, e a quantidade de pontos varia de
          acordo com o tipo de resíduo. Junte-se ao movimento, dê um novo destino ao lixo urbano e ajude a construir
          um futuro mais limpo e sustentável. Comece agora e faça a diferença!
        </p>
      </section>
    </div>
  );
}