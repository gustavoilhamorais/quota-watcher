import React from "react";
import { Data } from "../containers/StockContext";
import ShowStocksData from "../ShowStocksData";
import Dropdown from "../models/Dropdown";
import Loading from "../Loading";

const Main = () => {
  return (
    <div className="container container-fluid">
      <Data.Consumer>
        {provider => (
          <>
            <Dropdown title="Selecionar Ações">
              <button className="dropdown-item" onClick={() => provider.select("bidi4")}>
                Banco Inter S.A.
              </button>
              <button className="dropdown-item" onClick={() => provider.select("petr4")}>
                Petrobras
              </button>
              <button className="dropdown-item" onClick={() => provider.select("qual3")}>
                Embraer S.A.
              </button>
              <button className="dropdown-item" onClick={() => provider.select("btow3")}>
                B2W Companhia Digital
              </button>
              <button className="dropdown-item" onClick={() => provider.select("cpfe3")}>
                CPFL Energia S.A.
              </button>
            </Dropdown>
            {!provider.isLoading ? (
              provider.data ? (
                <ShowStocksData data={provider.data} selected={provider.selected} isLoading={provider.isLoading} />
              ) : (
                <span className="h6">Selecione uma cotação</span>
              )
            ) : (
              <Loading/>
            )}
          </>
        )}
      </Data.Consumer>
    </div>
  );
};

export default Main;
