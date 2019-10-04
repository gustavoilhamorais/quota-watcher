import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import Card from "../models/Card";

const Main = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(0);
  const [redirect, setRedirect] = useState(0);

  const handleSubmit = form => {
    form.preventDefault();
    if (rememberMe)
      localStorage.setItem(
        "@QuotaWatcher#SavedAccount",
        JSON.stringify({ email, password })
      );
    if (email && password) setRedirect(1);
  };

  const handleRememberMe = () => {
    if (rememberMe) setRememberMe(0);
    else setRememberMe(1);
  };

  const checkSavedAccount = () => {
    const savedAccount = localStorage.getItem("@QuotaWatcher#SavedAccount");
    if (savedAccount) {
      setEmail(savedAccount.account);
      setPassword(savedAccount.password);
    }
  };

  useEffect(() => {
    checkSavedAccount();
  }, []);

  return (
    <div className="container h-100 d-flex justify-content-center mt-5">
      <Card
        id="login"
        className="col col-lg-5"
        header={
          <h1 className="h3 mb-3 font-weight-normal text-center">Login</h1>
        }
      >
        {redirect ? (
          <Redirect
            to={{ pathname: "/dashboard", state: { from: props.location } }}
          />
        ) : (
          <></>
        )}
        <form className="form-signin" onSubmit={form => handleSubmit(form)}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                seu@email.com
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Usuário"
              aria-label="Usuário"
              aria-describedby="basic-addon1"
              value={email}
              onChange={input => setEmail(input.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <b>* * * * * * * * * * *</b>
              </span>
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Senha"
              aria-label="Senha"
              aria-describedby="basic-addon1"
              value={password}
              onChange={input => setPassword(input.target.value)}
            />
          </div>
          <label>
            <input
              type="checkbox"
              value={rememberMe}
              onChange={() => handleRememberMe()}
            />{" "}
            Lembrar de mim
          </label>
          <button className="btn btn-lg btn-primary btn-block mb-3 mt-2" type="submit">
            Entrar
          </button>
          <span>Não possui uma conta? </span><Link to="/register">Cadastre-se.</Link>
          <p className="mt-5 mb-3 text-muted">&copy; 2019</p>
        </form>
      </Card>
    </div>
  );
};

export default Main;
