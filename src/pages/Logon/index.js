import React from "react";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "./styles.css";

import peopleImg from "../../assets/people.png";
import logoImg from "../../assets/logo.svg";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="healthelo" />

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID"></input>
          <button className="button" type="submit">
            Entrar
          </button>

          <a href="/register">
            <ExitToAppIcon style={{ color: "#1c2f5d", fontSize: 22 }} />
            Não tenho cadastro
          </a>
        </form>
      </section>
      <img src={peopleImg} alt="people" className="people-img" />
    </div>
  );
}
