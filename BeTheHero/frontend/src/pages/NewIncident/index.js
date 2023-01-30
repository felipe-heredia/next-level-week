import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAlert } from "react-alert";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function NewIncident() {
	const Alert = useAlert();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [value, setValue] = useState("");

	const history = useHistory();
	const ongId = localStorage.getItem("ongId");

	async function handleNewIncident(e) {
		e.preventDefault();

		const data = {
			title,
			description,
			value
		};

		try {
			await api.post("incidents", data, {
				headers: {
					Authorization: ongId
				}
			});

			history.push("/profile");
		} catch {
			Alert.show(
				<div sytle={{ textTransform: "initial" }}>
					Erro na criação do caso, tente novamente
				</div>
			);
		}
	}

	return (
		<div className="new-incident-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be the Hero" />
					<h1>Cadastrar novo caso</h1>
					<p>
						Descreva o caso detalhadamente para encontrar um herói que resolva o
						seu problema.
					</p>
					<Link className="back-link" to="/profile">
						<FiArrowLeft size={16} color="#e02041" />
						Voltar para Perfil
					</Link>
				</section>
				<form onSubmit={handleNewIncident}>
					<input
						placeholder="Título do caso"
						value={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<textarea
						placeholder="Descrição"
						value={description}
						onChange={e => setDescription(e.target.value)}
					/>
					<input
						placeholder="Valor em reais"
						value={value}
						onChange={e => setValue(e.target.value)}
					/>

					<button className="button">Cadastrar</button>
				</form>
			</div>
		</div>
	);
}
