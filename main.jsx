// Importa StrictMode do React
// Serve para ativar avisos de práticas inseguras ou obsoletas durante o desenvolvimento
import { StrictMode } from 'react'

// Importa createRoot do react-dom/client
// É usado para criar a raiz da aplicação React na página
import { createRoot } from 'react-dom/client'

// Importa o CSS principal da aplicação
import './index.css'

//// Importa o componente principal da aplicação
import App from './App.jsx'

//// Cria a raiz React dentro do elemento com id="root" no HTML
createRoot(document.getElementById('root')).render(
    // StrictMode envolve a aplicação para avisar sobre problemas de desenvolvimento

  <StrictMode>
    <App />
  </StrictMode>,
)
