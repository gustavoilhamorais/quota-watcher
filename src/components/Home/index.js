import React, { Component } from "react";
import { Link } from "react-router-dom";
import './index.css';

export default class Main extends Component {
  render() {
    return (
      <div className="text-center">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <header className="masthead mb-5">
            <div className="inner">
              <h3 className="masthead-brand">Quota Watcher</h3>
              <nav className="nav nav-masthead justify-content-center">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/register">
                  Crie sua conta
                </Link>
                <Link className="nav-link" to="/login">
                  Entrar
                </Link>
              </nav>
            </div>
          </header>

          <main role="main" className="inner cover mt-5">
            <h1 className="cover-heading">Este é o Quota Watcher.</h1>
            <p className="lead">
              Monitore as principais ações da IBOVESPA e as principais criptomoedas do mercado com atualizações periódicas.Crie uma conta gratuitamente e
              comece a utilizar agora mesmo!
            </p>
          </main>

          <footer className="mastfoot mt-auto">
            <div className="inner">
              <p>
                Aplicação criada por <a target="_blank" rel="noopener noreferrer" href="https://github.com/gustavoilhamorais">Gustavo Ilha Morais.</a>.
              </p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
