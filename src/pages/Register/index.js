import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="healthelo" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos do seu Hospital.
          </p>
          <Link className="back-link" to="/">
            <ArrowBackIcon style={{ color: "#1c2f5d", fontSize: 22 }} />
            Já tenho cadastro
          </Link>
        </section>

        <form>
          <input placeholder="Nome do Hospital" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />

          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
