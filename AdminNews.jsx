// Exporta o componente para que ele possa ser usado em outros arquivos
export default function AdminNews() {

  // O return é o que será renderizado na tela
  return (

    // Fragmento React <> </> 
    // Serve para agrupar elementos sem criar uma div extra no HTML
    <>
      
      {/* Cabeçalho da página */}
      <div className="header">
        <h1>Painel - Criar Notícia</h1>
      </div>

      {/* Container principal da página */}
      <div className="container">

        {/* Card que envolve o formulário */}
        <div className="card">

          {/* Campo de input para o título da notícia */}
          <input 
            className="input" 
            placeholder="Título" // Texto que aparece dentro do campo antes de digitar
          />

          {/* Campo maior para escrever o conteúdo da notícia */}
          <textarea 
            rows="6" // Define altura com 6 linhas visíveis
            placeholder="Conteúdo" 
          />

          {/* Botão para enviar/criar a notícia */}
          <button className="button">
            Criar Notícia
          </button>

        </div>
      </div>
    </>
  );
}