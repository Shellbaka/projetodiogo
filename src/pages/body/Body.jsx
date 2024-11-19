import React from 'react';
import './Body.css';

export default function Body() {
  return (
    <div className='Body'>
      <h2><b>Transforme resíduos em recompensas</b></h2>

      <p>Na Reciclub, acreditamos que cada pequena ação é importante. Ao reciclar materiais como garrafas PET, latas
        e embalagens, você não só ajuda o meio ambiente, mas também acumula pontos que podem ser trocados por prêmios
        e descontos em lojas parceiras. Junte-se a nós e faça parte de uma comunidade que está construindo um futuro
        mais sustentável, onde os resíduos ganham novo valor e cada reciclagem é uma oportunidade de ganhar recompensas.</p>

      <img 
        src="https://recicleiros.org.br/wp-content/uploads/2023/05/recicla_campo-largo1.png-2048x1366.jpg" 
        className="Reciclube" 
        alt="Imagem Reciclube" 
        style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} 
      />
      <br />
      <br />
      
      <h2>Acumule pontos e troque por prêmios incríveis!</h2>

      <p>Recicle materiais como garrafas PET, vasilhas e latinhas e transforme-os em cupons de desconto, gift cards, vouchers e
        muito mais. Quanto mais você reciclar, mais pontos acumula, e a quantidade de pontos varia de acordo com o tipo de
        resíduo. Junte-se ao movimento, dê um novo destino ao lixo urbano e ajude a construir um futuro mais limpo e sustentável.
        Comece agora e faça a diferença!</p>

      <div className="actions">
        <button className="btn btn-success">Começar a reciclar</button>
        <button className="btn btn-info">Ver lojas parceiras</button>
      </div>
    </div>
  );
}
