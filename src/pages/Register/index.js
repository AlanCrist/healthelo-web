import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const resp = await api.post("hospitais", data);

      alert(`Seu ID de acesso: ${resp.data.id}`);

      history.push("/");
    } catch (err) {
      alert("Erro ao cadastrar, tente novamente.");
    }
  }

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

        <form onSubmit={handleRegister}>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome do Hospital"
          />
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
          />
          <input
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
            placeholder="WhatsApp"
          />

          <div className="input-group">
            <input
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="Cidade"
            />
            <input
              value={uf}
              onChange={e => setUf(e.target.value)}
              placeholder="UF"
              style={{ width: 80 }}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
