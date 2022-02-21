import React from 'react';
import Cart from '../../components/Cart';
import { Container } from './styles';

const FreeShipping:React.FC = () => {
  return (
    <>
      <Container>
        <header>
          <h2>Meu carrinho</h2>
        </header>

        <ul>
           <Cart />
           <Cart />
        </ul>

        <div className='payment-container'>
          <div>
            <strong>Total</strong>
            <strong>R$9,55</strong>
          </div>
        </div>

        <button type='button'>Finalizar compra</button>
      </Container>
    </>
  );
}

export { FreeShipping };