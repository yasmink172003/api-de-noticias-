// Importa o useState do React
// Ele serve para criar variáveis que mudam na tela
import { useState } from "react";

// Importa o axios para fazer requisições HTTP para o backend
import axios from "axios";

// Exporta o componente Login
export default function Login() {

  // Cria estado para armazenar o email digitado
  const [email, setEmail] = useState("");

  // Cria estado para armazenar a senha digitada
  const [password, setPassword] = useState("");

  // Função chamada quando clicar no botão Login
  async function handleLogin() {

    // Faz uma requisição POST para a rota /login do backend
    const res = await axios.post("http://localhost:3000/login", {

      // Envia email e senha no corpo da requisição
      email,
      password
    });

    // Salva o token retornado pelo backend no navegador
    // Esse token será usado para autenticação depois
    localStorage.setItem("token", res.data.token);
  }

  // Parte visual do componente
  return (
    <div>

      {/* Input do email */}
      <input 
        placeholder="Email" 
        onChange={e => setEmail(e.target.value)} 
      />

      {/* Input da senha */}
      <input 
        placeholder="Senha" 
        type="password" 
        onChange={e => setPassword(e.target.value)} 
      />

      {/* Botão que chama a função handleLogin */}
      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}