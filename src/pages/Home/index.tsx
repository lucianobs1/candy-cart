import React from 'react';
import candyText from '../../assets/candy-description.png';

import { Container, ImageContainer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <main>
        <h1>Candy Store</h1>
          <div className='candy-text-box'>
            <img src={candyText} alt="Candy" />
            <strong>Good Candy</strong> 
            <p>Good Vibes</p>
            <img src={candyText} alt="Candy" />
          </div>
        <a href="/">Shipping Free</a>
        <a href="/">Shipping</a>
      </main>

      <ImageContainer />
    </Container>
  );
}

export default Home;