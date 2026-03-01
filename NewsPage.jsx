// Importa hooks do React
// useState → controla estados
// useEffect → executa algo quando o componente carrega ou muda
import { useEffect, useState } from "react";

// Importa o useParams do react-router-dom
// Ele permite pegar parâmetros da URL (ex: /news/5 → id = 5)
import { useParams } from "react-router-dom";

// Importa o axios para fazer requisições HTTP
import axios from "axios";

// Exporta o componente NewsPage
export default function NewsPage() {

  // Pega o parâmetro "id" da URL
  // Se a rota for /news/10 → id será "10"
  const { id } = useParams();

  // Estado para armazenar a notícia
  // Começa como null porque ainda não foi carregada
  const [news, setNews] = useState(null);

  // useEffect executa quando o componente monta
  // E também sempre que o "id" mudar
  useEffect(() => {

    // Faz requisição para buscar notícia específica pelo ID
    axios.get(`http://localhost:3000/news/${id}`)

      // Quando a resposta chega, salva no estado
      .then(res => setNews(res.data));

  }, [id]); // Dependência: executa novamente se o id mudar

  // Se ainda não carregou a notícia, mostra mensagem de carregamento
  if (!news) return <p>Carregando...</p>;

  // Quando a notícia existir, renderiza a tela
  return (
    <>
      {/* Cabeçalho com o título da notícia */}
      <div className="header">
        <h1>{news.title}</h1>
      </div>

      <div className="container">
        <div className="card">

          {/* Conteúdo completo da notícia */}
          <p>{news.content}</p>

          {/* Mostra o nome do autor */}
          <small>Autor: {news.author.name}</small>

        </div>
      </div>
    </>
  );
}