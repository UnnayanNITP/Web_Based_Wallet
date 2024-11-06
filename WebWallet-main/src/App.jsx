import { useState } from 'react';
import './App.css';
import { generateMnemonic } from 'bip39';
import { SolanaWallet } from './SolanaWallet';
import { EthWallet } from './EthWallet';

function App() {
  const [mnemonic, setMnemonic] = useState('');

  return (
    <div className="crypto-container">
      <h1>Web Based Wallet</h1>
      <input type="text" value={mnemonic} readOnly placeholder="Generated Mnemonic" />
      <button onClick={async () => {
        const mn = generateMnemonic();
        setMnemonic(mn);
      }}>
        Create Mnemonic
      </button>

      {mnemonic && (
        <div className="wallet-button">
          <div className="wallet">
            <h3>Solana Wallet</h3>
            <SolanaWallet mnemonic={mnemonic} />
          </div>
          <div className="wallet">
            <h3>Ethereum Wallet</h3>
            <EthWallet mnemonic={mnemonic} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;