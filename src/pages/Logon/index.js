import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import api from "../../services/api";

import "./styles.css";

import peopleImg from "../../assets/people.png";
import logoImg from "../../assets/logo.svg";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const resp = await api.post("sessions", { id });

      localStorage.setItem("hospitalId", id);
      localStorage.setItem("hospitalName", resp.data.name);

      history.push("/profile");
    } catch (err) {
      alert("Falha ao tentar logar, tente novamente.");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="healthelo" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder="Sua ID"
          ></input>
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <ExitToAppIcon style={{ color: "#1c2f5d", fontSize: 22 }} />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={peopleImg} alt="people" className="people-img" />
    </div>
  );
}
