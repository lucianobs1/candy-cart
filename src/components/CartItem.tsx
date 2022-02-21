import React from 'react';


const CartItem: React.FC = () => {
  return (
    <li>
      <img src='https://www.drogariaminasbrasil.com.br/media/product/029/bombom-garoto-serenata-de-amor-unidade-20g-3b8.jpg' alt="candy" />
      <div>
        <strong>Trufa de morango</strong>
        <p>R$ 1,23</p>
        <span>R$ 1,11</span>
      </div>
    </li>
  )
}

export { CartItem };