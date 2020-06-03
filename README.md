# nlw1

![Imgur](https://i.imgur.com/agf76lb.jpg)

Repo destinado para a semana Next Level Week da [Rocketseat](https://rocketseat.com.br/), antiga Omnistack.

Crie um repo no seu git com o nome do seu projeto e clone o mesmo em sua maquina. E siga os passos seguintes.

```bash
- npm init -y
```

- Criar pakage diretamente sem perguntas

```bash
npm install express
```

- Micro frame para gerenciar rotas.

-- Criar src e depois server.ts

```bash
npm install @types/express -D
```

- Para o node ler TS temos que instalar:

```bash
npm install typescript ts-node -D
```

- Criar arquivo de configuração do Typescript

```bash
npx tsc --init
```

- Reiniciar servidor automaticamente

```bash
npm install ts-node-dev -D
```

- Vamos utilizar o Query builder Knex

```bash
npm intall knex sqlite3
```

Lambrando que na pasta DATABASE temos que fazer a configuração da conexão com o banco de dados que estivemos utilizando.

E no diretorio raiz temos que ter um arquivo chamado knexfile.ts ou js. com as configurações de path dos diretorios a serem usados pelo knex.

Depois de ter feito isso e editado as migrations, temos utilizar o comando abaixo:

```bash
npx knex --knexfile knexfile.ts migrate:latest
```

Migrations: procure fazer uma migration por vez, pois mais de uma criada pode acarretar problemas.

- Utilizar cors para fazer o controle de acesso das url da API

```bash
npm install cors @types/cors
```

Atenção por algum motivo o --ignore-watch não estava funcionando no master porem no DEV estava, tirei o wacth e voltou tudo ao normal.

Por Jose Ivan Ribeiro de Oliveira em workshop fornecido pela Rocketseat.

"Se você se esforça é porque algo você quer muito."
