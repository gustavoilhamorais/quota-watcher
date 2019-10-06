import React, { useState, useEffect } from "react";
import { Redirect, Link } from "react-router-dom";
import Card from "../models/Card";

const Main = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(0);
  const [redirect, setRedirect] = useState(0);

  const validateLogin = () => {
    try {
      const createdAccounts = JSON.parse(localStorage.getItem("@QuotaWatcher#CreatedAccounts"));
      const isRegistered = createdAccounts[email];
      if (isRegistered) {
        if (createdAccounts[email].password === password) return true;
        else return 'Senha inválida';
      } else return 'Conta não existe';
    } catch (error) {
      return ("Não foi possível realizar login.");
    }
  }

  const handleSubmit = form => {
    form.preventDefault();
    if (rememberMe) localStorage.setItem("@QuotaWatcher#SavedAccount", JSON.stringify({ email, password }));
    if (email && password) {
      const validation = validateLogin();
      if (validation === true) {
        localStorage.setItem("@QuotaWatcher#LastLogin", JSON.stringify({
          email, date: Date.now()
        }));
        setRedirect(1);
      } else window.alert(validation);
    }
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
      <Card id="login" className="col col-lg-5" header={<p className="h3 mb-3 font-weight-normal text-center">Login</p>}>
        {redirect ? <Redirect to={{ pathname: "/stocks", state: { from: props.location } }} /> : <></>}
        <form className="form-signin" onSubmit={form => handleSubmit(form)}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Email
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
                Senha
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
            <input type="checkbox" value={rememberMe} onChange={() => handleRememberMe()} /> Lembrar de mim
          </label>
          <button className="btn btn-lg btn-primary btn-block mb-3 mt-2" type="submit">
            Entrar
          </button>
          <span>Não possui uma conta? </span>
          <Link to="/register">Cadastre-se.</Link>
          <p className="mt-5 mb-3 text-muted text-center">&copy; 2019</p>
        </form>
      </Card>
    </div>
  );
};

export default Main;
