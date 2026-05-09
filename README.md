# EXPRESS_API 🎬

API construída com **Node.js + Express + TypeScript**, implementando um CRUD de filmes e preparada 
para evoluir com autenticação JWT, cadastro de usuários e criptografia de senha.

## 🚀 Funcionalidades atuais
- **GET /filmes** → lista todos os filmes
- **GET /filmes/:id** → busca filme por ID
- **POST /filmes** → adiciona novo filme
- **PUT /filmes/:id** → atualiza filme existente
- **DELETE /filmes/:id** → remove filme

## 📂 Estrutura de pastas
EXPRESS_API/
│
├── src/
│   ├── main.ts              # ponto de entrada da aplicação
│   ├── routes/              # rotas da API
│   │   ├── filmes.ts        # rotas de filmes (CRUD)
│   │   └── auth.ts          # rotas de autenticação (login, cadastro)
│   ├── controllers/         # lógica das rotas
│   │   ├── filmesController.ts
│   │   └── authController.ts
│   ├── middleware/          # middlewares
│   │   ├── authMiddleware.ts # valida token JWT
│   │   └── logger.ts         # logs de requisições
│   ├── models/              # modelos de dados
│   │   ├── filme.ts
│   │   └── usuario.ts
│   ├── services/            # regras de negócio
│   │   ├── usuarioService.ts # cadastro, login, criptografia
│   └── utils/               # utilitários
│       └── jwt.ts            # funções para gerar/validar tokens
│
├── dados/                   # dados mockados (filmes, usuários)
│   └── filmes.ts
│
├── package.json
├── tsconfig.json
└── .env                
  # variáveis de ambiente (ex: SECRET_KEY)
  ## 🛠️ Passos para rodar o projeto
1. **Instalar dependências**
   ```bash
   npm install
   npm run dev  // Rodar em modo desenvolvimento
   npm run build // Compilar para produção
   npm start








   
