import { Routes as RoutesPath, Route } from 'react-router-dom';

import React from 'react';
import Shipping from '../pages/Shipping';
import FreeShipping from '../pages/FreeShipping';
import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <>
      <RoutesPath>
        <Route path='/' element={<Home />}/>
        <Route path='/shipping' element={<Shipping />}/>
        <Route path='/free-shipping' element={<FreeShipping/>}/>
      </RoutesPath>
    </>
  )
}

export default Routes;