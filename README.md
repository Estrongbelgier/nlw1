# nlw1

Repo destinado para a semana Next Level Week da (Rocketseat)[https://rocketseat.com.br/], antiga Omnistack

- npm init -y

criar pakage diretamente sem perguntas

```bash
npm install express
```

Micro frame para gerenciar rotas

-- Criar src e depois server.ts

- npm install @types/express -D

Para o node ler TS temos que instalar:

- npm install ts-node -D
- npm install typescript -D

Criar arquivo de configuração do Typescript

- npx tsc --init

Reiniciar servidor automaticamente

- npm install ts-node-dev -D

Vamos utilizar o Query bulder Knex

- npm intall knex sqlite3

Lambrando que na pasta DATABASE temos que fazer a configuração da conexão com o banco de dados que estivemos utilizando.

E no diretorio raiz temos que ter um arquivo chamado knexfile.ts ou js. com as configurações de path dos diretorios a serem usados pelo knex.

Depois de ter feito isso e editado as migrations, temos utilizar o comando abaixo:

- npx knex migrate:latest --knexfile knexfile.ts migrate:latest

## Migratiions: procure fazer uma migration por vez, pois mais de uma criada a mãe pode dar problemas.

- npm install cors
- npm install @types/cors

  Utilizar cors para fazer o controle de acesso das url da API
