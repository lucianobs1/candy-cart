import React from 'react';

interface ItemsProps {
  item: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    sellingPrice: number;
  }
}

const CartItem: React.FC<ItemsProps> = ({ item }) => {
  return (
    <li>
      <div className='image-box'>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div>
        <strong>{item.name}</strong>
        <p>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(item.price/100)}</p>
        <span>{new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(item.sellingPrice/100)}</span>
      </div>
    </li>
  )
}

export { CartItem };