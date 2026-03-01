# 📰 API de Notícias

Backend e frontend de um portal de notícias desenvolvido com **Fastify**, **Prisma**, **JWT**, **bcrypt** e **React**.

Este projeto permite:

* Cadastro de usuários
* Login com autenticação segura
* Controle de permissões
* Criação e listagem de notícias
* Associação de notícias com autor

# 🛠️ Tecnologias Utilizadas

## 🔹 Backend

* Node.js
* Fastify
* Prisma ORM
* JWT (JSON Web Token)
* bcrypt

## 🔹 Frontend

* React
* Axios
* React Router DOM

# 📁 Estrutura do Projeto

```
api-de-noticias/
│
├── prisma/
│   └── schema.prisma
│
├── server.js
├── package.json
│
└── client/
    ├── src/
    ├── package.json
```

# 🚀 Como Executar o Projeto

## 1️⃣ Clonar o repositório

```bash
git clone <url-do-repositorio>
cd api-de-noticias
```

## 2️⃣ Instalar dependências do backend

```bash
npm install
```

## 3️⃣ Configurar o Prisma

Inicializar:

```bash
npx prisma init
```

Rodar migrations:

```bash
npx prisma migrate dev --name init
```

Isso criará o banco de dados automaticamente.

---

## 4️⃣ Rodar o backend

```bash
node server.js
```

Servidor rodando em:

```
http://localhost:3001
```

## 5️⃣ Instalar e rodar o frontend

```bash
cd client
npm install
npm start
```

Frontend rodando em:

```
http://localhost:3000
```

# Autenticação JWT

Após fazer login, o sistema retorna um **token JWT**.

Esse token deve ser enviado no header das rotas protegidas:

```
Authorization: Bearer SEU_TOKEN
```


## Middlewares

### `auth`

* Verifica se o token é válido
* Protege rotas privadas

### `adminOnly`

* Permite acesso apenas para usuários com role `ADMIN`


# Funcionalidades

## Usuários

* Criar usuário
* Login com senha criptografada
* Definição de permissões (USER, EDITOR, ADMIN)

## Notícias

* Criar notícia (EDITOR ou ADMIN)
* Listar todas as notícias
* Visualizar notícia específica
* Notícias vinculadas ao autor



# Conceitos Aplicados

* Arquitetura REST
* Autenticação baseada em token
* Controle de permissões por role
* Relacionamento entre tabelas no banco
* Organização backend + frontend separados

#  Melhorias Futuras

* CRUD completo de notícias (update e delete)
* Upload de imagens
* Paginação
* Deploy em produção
* Testes automatizados


# 👩🏻‍💻 Autora

**Yasmin Karolayne**

Projeto desenvolvido para fins de estudo e prática em desenvolvimento Full Stack 🚀

