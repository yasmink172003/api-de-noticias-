Criar a pasta do projeto:

mkdir api-de-noticias
cd api-de-noticias

Inicializar o Node.js:

npm init -y

Instalar o Fastify e outras dependências
npm install fastify fastify-cors fastify-jwt bcrypt prisma @prisma/client

Instalar o prima como dev:
npx prisma init

criar o banco:
npx prisma migrate dev --name init

Criar app React
npx create-react-app client
cd client
npm install axios react-router-dom

# Api-de-noticias

Backend de um portal de notícias utilizando **Fastify**, **Prisma**, **JWT** e **bcrypt**.  
Este projeto permite criar usuários, autenticar, criar notícias e listar notícias com informações do autor.

---

## 🛠 Tecnologias

- React
- Node.js
- Fastify – framework backend rápido
- Prisma – ORM para banco de dados
- JWT – autenticação baseada em token
- bcrypt – hash de senhas

---

## 🚀 Funcionalidades

- Cadastro de usuários com senha criptografada
- Login com autenticação JWT
- Middleware \`auth\` para proteger rotas privadas
- Middleware \`adminOnly\` para limitar acesso a administradores
- CRUD básico de notícias (criação e leitura)
- Notícias vinculadas ao autor


## 🔐 Autenticação JWT

- Após login, você recebe um token JWT  
- Inclua no header das rotas protegidas:
\`\`\`
Authorization: Bearer SEU_TOKEN
\`\`\`
- Middleware \`auth\` protege rotas  
- Middleware \`adminOnly\` limita acesso a admins  

---

#👩🏻Autora 
Yasmin Karolayne
