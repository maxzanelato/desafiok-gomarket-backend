# GoMarket

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Tabela de conteúdos:

   * [Descrição do Projeto](#descrição-do-projeto)
   * [Instalação](#instalação)
   * [Como usar](#como-usar)
      * [Pré requisitos](#pré-requisitos)
      * [Execução](#execução)
   * [Tecnologias](#tecnologias)


## Descrição do projeto
GoMarket é um mercado que oferece as opções de cadastro, edição, pesquisa, lista e remoção de produtos. Conta ainda com uma tela de login onde pessoas registradas poderão realizar as operações.

  - CRUD de produtos
  - Pesquisa de produtos
  - Login
  - Registro de usuário

 O front-end para se conectar a essa API Rest está presente em [Front-end][df1]

## Instalação

GoMarket requer requer NodeJS para executar e yarn para as dependências.

Install the dependencies and devDependencies and start the server.

```sh
$ cd desafiok-gomarket-backend
$ yarn 
$ yarn dev:server
```

Porém é necessário se atentar aos pré-requisitos antes de executá-lo.

## Como usar

### Pré requisitos
- Ter o PostgreSQL instalado na máquina ou usar uma imagem docker para isso. Caso não tenha, o tutorial [Instalar docker e PostgreSQL](https://www.notion.so/Instalando-Docker-6290d9994b0b4555a153576a1d97bee2) poderá ajudar;
- Ter yarn instalado na máquina;
- Ter NodeJS instalado na máquina.

### Execução

GoMarket requer que siga os passos abaixo para sua execução:

- Criar um banco de dados seguindo as informações da [configuração da base de dados](https://github.com/maxzanelato/desafiok-gomarket-backend/blob/master/ormconfig.json) no PostgreSQL;
- Seguir os comandos abaixo:
```sh
$ cd desafiok-gomarket-backend
$ yarn
$ yarn typeorm migration:run
```
- Verificar na base a criação das tabelas e inserção de alguns dados;
- Executar os comandos abaixo:
```sh
$ cd desafiok-gomarket-backend
$ yarn dev:server
```
- Ao final, o sistema irá mostrar uma mensagem que o servidor inicializou na porta 3333.

```Caso queira fazer testes com API, há um cliente de API Rest Insomnia que poderá ser importado  e utilizado para fazer requisições. ```: [API Insomnia](https://github.com/maxzanelato/desafiok-gomarket-backend/tree/master/insomnia)

Após a aplicação estiver executando, uma documentação via Swagger estará disponível. Ela poderá ser acessada a partir do [link](http://localhost:3333/swagger/).

## Tecnologias
As seguintes tecnologias foram utilizadas:

| Lib | Descrição |
| ------ | ------ |
| bcryptjs | Criptografar a senha |
| cors | Permitir acesso externo |
| date-fns | Formatação de datas |
| express | Criar um servidor com javascript |
| express-async-errors | Tratador de erros de global |
| jsonwebtoken | Geração e verificação de tokens JWT |
| multer | Gerência de arquivos locais |
| cors | Permitir acesso externo |
| pg | Drive de conexão com o PostgreSQL |
| swagger-ui-express | Documentação via swagger |
| typeorm | Gerenciador de entidades e migrations escrito em TypeScript |
| uuidv4 | Gerador de id |



   [df1]: <https://github.com/maxzanelato/-desafiok-gomarket-frontend>
