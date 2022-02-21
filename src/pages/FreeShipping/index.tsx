import React from 'react';
import { CartItem } from '../../components/CartItem';

import { Container } from './styles';

const FreeShipping:React.FC = () => {
  return (
    <>
      <Container>
        <header>
          <h2>Meu carrinho</h2>
        </header>

        <ul>
           <CartItem />
           <CartItem />
        </ul>

        <div className='payment-container'>
          <div>
            <strong>Total</strong>
            <strong>R$9,55</strong>
          </div>
        </div>

        <div className='button-container'>
          <button type='button'>Finalizar compra</button>
        </div>
      </Container>
    </>
  );
}

export { FreeShipping };