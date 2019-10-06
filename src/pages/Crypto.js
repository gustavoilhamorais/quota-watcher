import React from 'react';
import CryptoContext from '../components/containers/CryptoContext';
import Main from '../components/Crypto';

const Crypto = () => (
  <CryptoContext>
    <Main />
  </CryptoContext>
);

export default Crypto;