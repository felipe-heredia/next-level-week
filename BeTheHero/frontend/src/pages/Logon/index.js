import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

export default function Logon() {
	const Alert = useAlert();
	const [id, setId] = useState("");
	const history = useHistory();

	async function handleLogin(e) {
		e.preventDefault();

		try {
			const response = await api.post("sessions", { id });

			localStorage.setItem("ongId", id);
			localStorage.setItem("ongName", response.data.name);

			history.push("/profile");
		} catch (err) {
			Alert.show(
				<div style={{ textTransform: "initial" }}>
					Falha no Login, tente novamente.
				</div>
			);
		}
	}

	return (
		<div className="logon-container">
			<section className="form">
				<img src={logoImg} alt="Be the Hero" />

				<form onSubmit={handleLogin}>
					<h1>Faça seu logon</h1>

					<input
						placeholder="Seu ID"
						value={id}
						onChange={e => setId(e.target.value)}
					/>
					<button className="button" type="submit">
						Entrar
					</button>

					<Link className="back-link" to="/register">
						<FiLogIn size={16} color="#e02041" />
						Registre-se
					</Link>
				</form>
			</section>

			<img src={heroesImg} alt="Heroes" />
		</div>
	);
}
