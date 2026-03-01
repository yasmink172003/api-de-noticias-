// Importa o hook useState do React
// Ele serve para criar e controlar estados (valores que mudam na tela)
import { useState } from "react";

// Importa o axios para fazer requisições HTTP para o backend
import axios from "axios";

// Exporta o componente para poder usar em outras partes do projeto
export default function AdminUsers() {

  // Criando estados para armazenar os dados digitados no formulário
  const [name, setName] = useState("");       // Nome do usuário
  const [email, setEmail] = useState("");     // Email do usuário
  const [password, setPassword] = useState(""); // Senha do usuário
  const [role, setRole] = useState("editor"); // Tipo de usuário (editor por padrão)

  // Função chamada quando clicar no botão "Criar Usuário"
  async function handleCreateUser() {

    // Pega o token salvo no navegador (usado para autenticação)
    const token = localStorage.getItem("token");

    // Faz uma requisição POST para o backend
    await axios.post(
      "http://localhost:3000/users", // URL da API

      // Corpo da requisição (dados enviados para o backend)
      { name, email, password, role },

      // Configurações da requisição (headers)
      {
        headers: {
          // Envia o token no padrão Bearer Token
          Authorization: `Bearer ${token}`
        }
      }
    );

    // Exibe mensagem após criar usuário
    alert("Usuário criado!");
  }

  // Parte visual do componente
  return (
    <div>
      <h1>Criar Usuário</h1>

      {/* Input para o nome */}
      <input 
        placeholder="Nome" 
        onChange={e => setName(e.target.value)} // Atualiza o estado name
      />

      {/* Input para o email */}
      <input 
        placeholder="Email" 
        onChange={e => setEmail(e.target.value)} // Atualiza o estado email
      />

      {/* Input para a senha */}
      <input
        placeholder="Senha"
        type="password"
        onChange={e => setPassword(e.target.value)} // Atualiza o estado password
      />

      {/* Select para escolher o tipo de usuário */}
      <select onChange={e => setRole(e.target.value)}>
        <option value="editor">Editor</option>
        <option value="admin">Admin</option>
      </select>

      {/* Botão que chama a função de criar usuário */}
      <button onClick={handleCreateUser}>
        Criar Usuário
      </button>
    </div>
  );
}