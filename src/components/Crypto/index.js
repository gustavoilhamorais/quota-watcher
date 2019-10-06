import React from "react";
import { Data } from "../containers/CryptoContext";
import Dropdown from '../models/Dropdown';
import ShowCryptoData from "../ShowCryptoData";
import Loading from '../Loading';

const Main = () => {
  return (
    <div className="container container-fluid">
      <Data.Consumer>
        {provider => (
          <>
            <Dropdown title="Criptomoedas">
              <button className="dropdown-item" onClick={() => provider.select("blockchain")}>
                Blockchain.info
              </button>
              <button className="dropdown-item" onClick={() => provider.select("coinbase")}>
                Coinbase
              </button>
              <button className="dropdown-item" onClick={() => provider.select("bitstamp")}>
                BitStamp
              </button>
              <button className="dropdown-item" onClick={() => provider.select("foxbit")}>
                FoxBit
              </button>
              <button className="dropdown-item" onClick={() => provider.select("mercabitcoin")}>
                Mercado Bitcoin
              </button>
              <button className="dropdown-item" onClick={() => provider.select("omnitrade")}>
                OmniTrade
              </button>
              <button className="dropdown-item" onClick={() => provider.select("xdex")}>
                XDEX
              </button>
            </Dropdown>
            {!provider.isLoading ? (
              provider.data ? (
                <ShowCryptoData data={provider.data} selected={provider.selected} />
                ) : <span className="h6">Selecione uma criptomoeda</span>
              ) : <Loading />
            }
        </>
        )}
      </Data.Consumer>
    </div>
  );
};

export default Main;
