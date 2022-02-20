import React, { useState } from 'react';

import { Container, CandyContent } from './styles';

const FreeShipping:React.FC = () => {
  const [candies, setCandies] = useState<[]>([])
  return (
    <Container>
      <header>
        <h1>Meu carrinho</h1>
      </header>
        <CandyContent>
          <li>
            <img src='https://www.drogariaminasbrasil.com.br/media/product/029/bombom-garoto-serenata-de-amor-unidade-20g-3b8.jpg' alt="candy" />
            <div>
              <strong>Trufa de morango</strong>
              <p>R$ 1,23</p>
              <span>R$ 1,11</span>
            </div>
          </li>
          <li>
            <img src='https://www.drogariaminasbrasil.com.br/media/product/029/bombom-garoto-serenata-de-amor-unidade-20g-3b8.jpg' alt="candy" />
            <div>
              <strong>Trufa de morango</strong>
              <p>R$ 1,23</p>
              <span>R$ 1,11</span>
            </div>
          </li>
          <li>
            <img src='https://www.drogariaminasbrasil.com.br/media/product/029/bombom-garoto-serenata-de-amor-unidade-20g-3b8.jpg' alt="candy" />
            <div>
              <strong>Trufa de morango</strong>
              <p>R$ 1,23</p>
              <span>R$ 1,11</span>
            </div>
          </li>
          <li>
            <img src='https://www.drogariaminasbrasil.com.br/media/product/029/bombom-garoto-serenata-de-amor-unidade-20g-3b8.jpg' alt="candy" />
            <div>
              <strong>Trufa de morango</strong>
              <p>R$ 1,23</p>
              <span>R$ 1,11</span>
            </div>
          </li>
        </CandyContent>

        <div className='payment-container'>
          <div>
            <strong>Total</strong>
            <strong>R$9,55</strong>
          </div>
        </div>

        <button type='button'>Finalizar compra</button>
    </Container>
  );
}

export { FreeShipping };