import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <div className="container container-fluid mt-5">
              <div className="jumbotron">
        <h1 className="display-5">Olá, mundo!</h1>
        <p className="lead">Este é o Quota Watcher. Crie uma conta gratuitamente e comece a utilizar agora mesmo!</p>
        <hr className="my-4" />
        <p>Monitore as principais ações da IBOVESPA e as principais criptomoedas do mercado com atualizações periódicas.</p>
        <Link className="btn btn-primary btn-sm mb-5" to={"/register"} role="button">
          Criar conta
        </Link>
        <p>
          <Link to={"/login"}>Entrar</Link>
        </p>
      </div>
      </div>
    );
  }
}
