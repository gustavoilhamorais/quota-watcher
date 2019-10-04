import React from "react";
import { Link } from "react-router-dom";

const cardBorderAndPadding = {
  padding: "1px 5px",
  border: "#FFFFFFFF"
};

const Error = () => (
  <div className="row align-items-center">
    <div className="col">
      <div className="card" style={ cardBorderAndPadding }>
        <div card-body>
          <div className="card-header">
            <div className="card-title">
              <h2>Esta página não existe!</h2>
            </div>
          </div>
          <div className="card-subtitle text-muted mt-2 ml-3">
            <h3>Você está procurando por: </h3>
          </div>
          <div className="card-text ml-3">
            <Link to="/">Págin Inicial</Link> <br />
            <Link to="/login">Entrar</Link> <br />
            <Link to="/register">Criar nova conta</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Error;
