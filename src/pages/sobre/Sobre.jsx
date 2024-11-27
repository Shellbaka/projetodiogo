import React from 'react';
import './Sobre.css';

export default function Sobre() {
    return (
        <div className="sobre-container">

            <section className="sobre-header">
                <div className="text">
                    <h1>Quem Somos</h1>
                    <p>
                        A Reciclub conecta pessoas, empresas e comunidades em uma missão sustentável.
                        Promovemos práticas responsáveis e recompensamos escolhas conscientes, ajudando a
                        construir um futuro mais limpo e cuidar do meio ambiente de forma colaborativa.
                    </p>
                </div>
                <div className="image">
                    <img src="fotos/teste2.jpg" alt="Equipe da Reciclub" />
                </div>
            </section>

            <section className="sobre-missao">
                <div className="image">
                    <img src="fotos/borda2.png" alt="Ponto de coleta sustentável" />
                </div>
                <div className="text">
                    <h2>Nossa Missão</h2>
                    <p>
                        Incentivar milhões de pessoas e empresas a adotarem práticas de sustentabilidade,
                        transformando resíduos em oportunidades reais. Acreditamos que cada escolha consciente
                        nos aproxima de um mundo mais saudável e sustentável.
                    </p>
                </div>
            </section>

            <section className="sobre-historia">
                <div className="text">
                    <h2>O Que Nos Move</h2>
                    <p>
                        Em 2024, demos o primeiro passo em nossa missão de simplificar e recompensar ações sustentáveis.
                        Juntos, com clientes, empresas e comunidades, estamos construindo um movimento onde pequenas ações
                        geram grandes impactos e ajudam a transformar o futuro do nosso planeta.
                    </p>
                </div>
                <div className="image">
                    <img src="fotos/borda3.png" alt="História da Reciclub" />
                </div>
            </section>
        </div>
    );
}