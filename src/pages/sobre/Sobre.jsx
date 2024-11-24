import React from 'react';
import './Sobre.css';

export default function Sobre() {
    return (
        <div className='sobre-container'>
            {/* Seção principal com título */}
            <section className='sobre-header'>
                <div className='text'>
                    <h1>Quem Somos</h1>
                    <p>
                        A Reciclub conecta pessoas e empresas em uma missão sustentável, promovendo práticas responsáveis
                        e recompensando hábitos que ajudam a cuidar do meio ambiente.
                    </p>
                </div>
                <div className='image'>
                    <img src='fotos/teste2.jpg' alt='Equipe da Reciclub' />
                </div>
            </section>

            {/* Seção de missão */}
            <section className='sobre-missao'>
                <div className='image'>
                    <img src='https://via.placeholder.com/400x250' alt='Ponto de coleta sustentável' />
                </div>
                <div className='text'>
                    <h2>Nossa Missão</h2>
                    <p>
                        Incentivar milhões de pessoas e empresas a adotarem práticas de sustentabilidade, 
                        transformando resíduos em oportunidades. Nosso objetivo é construir um futuro mais limpo, 
                        recompensando escolhas conscientes.
                    </p>
                </div>
            </section>

            {/* Seção da história */}
            <section className='sobre-historia'>
                <div className='text'>
                    <h2>Nossa História</h2>
                    <p>
                        Desde 2023, ajudamos clientes e empresas a dar um destino sustentável aos materiais recicláveis. 
                        Nosso time acredita que pequenas ações podem ter grandes impactos, e trabalhamos para simplificar 
                        e recompensar essas práticas.
                    </p>
                </div>
                <div className='image'>
                    <img src='https://via.placeholder.com/400x250' alt='História da Reciclub' />
                </div>
            </section>
        </div>
    );
}
