// Importa o Fastify e ativa o logger para mostrar logs no console
const fastify = require("fastify")({ logger: true });

// Importa CORS para permitir requisições de outros domínios
const cors = require("@fastify/cors");

// Importa JWT para autenticação baseada em tokens
const jwt = require("@fastify/jwt");

// Importa bcrypt para criptografar senhas
const bcrypt = require("bcrypt");

// Importa Prisma Client para conectar com o banco de dados
const { PrismaClient } = require("@prisma/client");

// Cria uma instância do Prisma
const prisma = new PrismaClient();

// Registra o CORS no Fastify
fastify.register(cors);
// Registra JWT com uma chave secreta
// A chave é usada para assinar e verificar tokens
fastify.register(jwt, { secret: "SUPER12W34HSECRET" });

// Função que protege rotas
async function auth(request, reply) {
  try {
    // Verifica se o token enviado pelo cliente é válido
    await request.jwtVerify();
  } catch (err) {
    // Se token inválido, retorna erro
    reply.send(err);
  }
}

fastify.post("/users", async (request, reply) => {
  const { name, email, password, role } = request.body;

  // Criptografa a senha antes de salvar
  const hashedPassword = await bcrypt.hash(password, 10);

  // Cria usuário no banco
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role
    }
  });

  // Retorna o usuário criado
  reply.send(user);
});

fastify.post("/login", async (request, reply) => {
  const { email, password } = request.body;

  // Busca usuário pelo email
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) return reply.status(400).send({ error: "Usuário não encontrado" });

  // Compara senha enviada com senha criptografada do banco
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return reply.status(400).send({ error: "Senha inválida" });

  // Cria token JWT com id e role do usuário
  const token = fastify.jwt.sign({ id: user.id, role: user.role });

  // Retorna token
  reply.send({ token });
});

fastify.post("/news", { preHandler: auth }, async (request, reply) => {
  const { title, content } = request.body;

  // Cria notícia no banco associando ao autor
  const news = await prisma.news.create({
    data: {
      title,
      content,
      authorId: request.user.id
    }
  });

  reply.send(news);
});

fastify.get("/news/:id", async (request, reply) => {
  const { id } = request.params;

  // Busca notícia pelo ID e inclui informações do autor
  const news = await prisma.news.findUnique({
    where: { id: Number(id) },
    include: { author: true }
  });

  reply.send(news);
});

async function adminOnly(request, reply) {
  // Se usuário não for admin, bloqueia acesso
  if (request.user.role !== "admin") {
    return reply.status(403).send({ error: "Acesso negado" });
  }
}


//servidor 
fastify.listen({ port: 3000 }, () => {
  console.log("Servidor rodando na porta 3000");
});