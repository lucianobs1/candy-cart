import React, { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { CartItem } from '../../components/CartItem';

import { Container } from './styles';

interface Candy {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  sellingPrice: number;
}

const Shipping:React.FC = () => {
  const [candies, setCandies] = useState<Candy[]>([]);

  useEffect(() => {
    fetch('api/items')
    .then(response => response.json())
    .then(data => setCandies(data.candies));
  }, [])

  
  const amount = 0;

  const total = candies.reduce(
    (previousValue, currentValue) => previousValue += currentValue.sellingPrice,
    amount
  ) / 100;

  return (
    <>
      <Container>
      <header>
          <a href="/">
            <FiArrowLeft size={24}/>
          </a>
          <h2>Meu carrinho</h2>
        </header>

        <ul>
        {candies.map(candy =>  {
          return (
            <CartItem key={candy.id} item={candy} />
          )
        })}
        </ul>

        <div className='payment-container'>
          <div>
            <strong>Total</strong>
            <strong>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(total)}</strong>
          </div>

         { total > 10 && (
            <div className='shipping-message-box'>
              <p>Parabéns, sua compra tem frete grátis !</p>
            </div>
         )}

        </div>

        <div className='button-container'>
          <button type='button'>Finalizar compra</button>
        </div>

      </Container>
    </>
  );
}

export { Shipping };