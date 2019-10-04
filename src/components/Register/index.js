import React, { useState, useEffect } from "react";
import { Redirect, Link } from 'react-router-dom';
import Card from "../models/Card";

const Main = ({ location }) => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(0);

  const handleSubmit = form => {
    form.preventDefault();
    if (name && email && password && confirmPassword) {
      const passwordValidation = validatePasswords();
      if (passwordValidation === "ok") {
        const emailValidation = validateEmail();
        if (emailValidation === "ok") {
          createAccount();
        } else window.alert(emailValidation);
      } else window.alert(passwordValidation);
    } else window.alert("Por favor, preencha todos os campos!");
  };

  const validateEmail = () => {
    let createdAccounts = JSON.parse(
      localStorage.getItem("@QuotaWatcher#CreatedAccounts")
    );
    if (createdAccounts) {
      for (const accountEmail in createdAccounts) {
        if (accountEmail === email) {
          return "Este email já foi utilizado! Por favor, faça login ou utilize outro email.";
        } else return "ok";
      }
    } else return "ok";
  };

  const createAccount = () => {
    handleLocalStorage();
    window.confirm("Sua nova conta foi criada com sucesso!");
    setRedirect(true);    
  };

  const validatePasswords = () => {
    const passwordLength = password.length >= 6;
    const passwordsMatch = password === confirmPassword;
    if (passwordLength) {
      if (passwordsMatch) return "ok";
      else return "As senhas não são iguais.";
    } else
      return "A senha deve conter no mínimo 6 caracteres (de qualquer tipo).";
  };

  const handleLocalStorage = () => {
    const savedAccounts = JSON.parse(localStorage.getItem("@QuotaWatcher#CreatedAccounts"));
    if (savedAccounts) {
      localStorage.setItem(
        "@QuotaWatcher#CreatedAccounts",
        JSON.stringify({
          ...savedAccounts,
          [email]: {
            name,
            password
          }
        })
      );
    } else {
      localStorage.setItem(
        "@QuotaWatcher#CreatedAccounts",
        JSON.stringify({
          [email]: {
            name,
            password
          }
        })
      );
    }
  }

  return (
    <div className="container h-100 d-flex justify-content-center mt-5">
      { redirect ? <Redirect to={{ pathname: '/login', state: {from: location} }}/> : <></>}
      <Card
        className="col col-lg-5"
        id="register"
        header={<p className="h3 mb-3 font-weight-normal text-center">Criar conta</p>}
      >
        <form className="form-signin" onSubmit={form => handleSubmit(form)}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Nome
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Nome completo"
              aria-label="nome"
              aria-describedby="basic-addon1"
              value={name}
              onChange={input => setName(input.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Email
              </span>
            </div>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              aria-label="email"
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
              aria-label="senha"
              aria-describedby="basic-addon1"
              value={password}
              onChange={input => setPassword(input.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Confirme
              </span>
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Confirme sua senha"
              aria-label="confirm-password"
              aria-describedby="basic-addon1"
              value={confirmPassword}
              onChange={input => setConfirmPassword(input.target.value)}
            />
          </div>
          <button
            className="btn btn-lg btn-primary btn-block mb-3 mt-2"
            type="submit"
          >
            Confirmar cadastro
          </button>
          <span>Já possui uma conta? </span><Link to="/login">Entrar.</Link>
          <p className="mt-5 mb-3 text-muted text-center">&copy; 2019</p>
        </form>
      </Card>
    </div>
  );
};

export default Main;
