import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/news")
      .then(res => setNews(res.data));
  }, []);

  return (
    <>
      <div className="header">
        <h1>Portal de Notícias</h1>
      </div>

      <div className="container">
     {news.length === 0 && <p>Nenhuma notícia encontrada.</p>}

     {news.map(n => (
          <div key={n.id} className="card">
            <h2>{n.title}</h2>
           <p>
            {n.content?.substring(0, 100) || "Sem conteúdo"}...
           </p>
            

            <Link to={`/news/${n.id}`}>
              <button className="button">
                Ler mais
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
