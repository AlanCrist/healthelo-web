import React from "react";
import { Link } from "react-router-dom";

import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="healthelo" />
        <span>Bem vinda, Nossa senhora das neves</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <PowerSettingsNewIcon style={{ color: "#1c2f5d", fontSize: 22 }} />
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <DeleteOutlineIcon style={{ color: "#1c2f5d", fontSize: 25 }} />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <DeleteOutlineIcon style={{ color: "#1c2f5d", fontSize: 25 }} />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <DeleteOutlineIcon style={{ color: "#1c2f5d", fontSize: 25 }} />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <DeleteOutlineIcon style={{ color: "#1c2f5d", fontSize: 25 }} />
          </button>
        </li>
      </ul>
    </div>
  );
}
