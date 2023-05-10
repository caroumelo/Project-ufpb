import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [avaliacao, setAvaliacao] = useState("");
  const [dados, setDados] = useState([]);

  useEffect(() => {
    setDados(JSON.parse(localStorage.getItem("crud")) || []);
  }, []);

  useEffect(() => {
    localStorage.setItem("crud", JSON.stringify(dados));
  }, [dados]);

  const adicionar = () => {
    const novoRegistro = {
      id: new Date().getTime(),
      nome,
      endereco,
      avaliacao,
    };
    setDados([...dados, novoRegistro]);
  };

  const atualizar = (id) => {
    const novosDados = dados.map((registro) =>
      registro.id === parseInt(id)
        ? { ...registro, nome, endereco, avaliacao }
        : registro
    );
    setDados(novosDados);
  };

  const excluir = (id) => {
    const novosDados = dados.filter(
      (registro) => registro.id !== parseInt(id)
    );
    setDados(novosDados);
  };

  const preencherForm = (id, nome, endereco, avaliacao) => {
    setId(id);
    setNome(nome);
    setEndereco(endereco);
    setAvaliacao(avaliacao);
  };

  const editar = (id) => {
    const registro = dados.find((registro) => registro.id === id);
    if (registro) {
      preencherForm(registro.id, registro.nome, registro.endereco, registro.avaliacao);
    }
  };

  const remover = (id) => {
    excluir(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      atualizar(id);
    } else {
      adicionar();
    }
    setId("");
    setNome("");
    setEndereco("");
    setAvaliacao("");
  };

  return (
    <div className="App">
      <h1>CRUD Simples</h1>
      <form onSubmit={handleSubmit}>
        <input type="hidden" value={id} />
        <input
          type="text"
          value={nome}
          placeholder="Nome"
          required
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          value={endereco}
          placeholder="Endereço"
          required
          onChange={(e) => setEndereco(e.target.value)}
        />
        <input
          type="number"
          value={avaliacao}
          placeholder="Avaliação"
          required
          onChange={(e) => setAvaliacao(e.target.value)}
        />
        <button type="submit">Salvar</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Avaliação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((registro) => (
            <tr key={registro.id}>
              <td>{registro.nome}</td>
              <td>{registro.endereco}</td>
              <td>{registro.avaliacao}</td>
              <td>
                <button onClick={() => editar(registro.id)}>Editar</button>
                <button onClick={() => remover(registro.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

