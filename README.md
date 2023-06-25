# Visão Geral

Este teste consiste em criar um pequeno cadastro de clientes com vínculo de contatos, depois mostrar o cliente e seus contatos vinculados.

# Documentação da API

Para documentação completa acesse: https://

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Comandos](#2-Comandos)
- [Variáveis de Ambiente](#3-variáveis-de-ambiente)
- [Migrations](#4-migrations)
- [Endpoints](#5-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript)
- [NodeJS](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Express](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/)
- [Yup](https://www.npmjs.com/package/yup)

---


### 2 - Comandos

 - Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn install
```

- Para rodar a aplicação use o comando:

```shell
yarn dev
```


## 3 - Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

## 4 - Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts
```

---

## 5 - Endpoints

- [/users]
    - [POST   - /users](Criação de usuários)
    - [GET    - /users](Listar usuários)
	- [GET    - /users/:id](Listar um usuário)
	- [PATH   - /users/:id](Editar usuário)
	- [DELETE - /users/:id](Deletar usuário)

- [/contact]
    - [POST   - /contact](Criar contatos)
    - [GET    - /contact](Listar todos os contatos)
	- [GET    - /contact/:id](Listar contatos de um usuário específico)
	- [PATH   - /contact/:id](Editar contato)
	- [DELETE - /contact/:id](Deletar contato)


---
##  **user**

O objeto user é definido como:

| Campo        | Tipo   | Descrição                                     	|
| -------------|--------|---------------------------------------------------|
| id           | string | id do usuário gerado automaticamente.             |
| name         | string | Nome completo passado no cadastro.               	|
| phoneNumber  | string | Número de telefone.                       	    |
| email        | string | Email válido cadastrado.                       	|
| createdAt    | date   | Data da criação do usuário gerada automaticamente.|

##  **contact**

O objeto contact é definido como:

| Campo        | Tipo   | Descrição                                     	|
| -------------|--------|---------------------------------------------------|
| id           | string | id do contato gerado automaticamente.             |
| fullName     | string | Nome completo passado no cadastro.               	|
| phoneNumber  | string | Número de telefone.                       	    |
| email        | string | Email válido cadastrado.                       	|
| createdAt    | date   | Data da criação do usuário gerada automaticamente.|
| userId       | string | id do usuário para conexão das tabelas.           |


### Possíveis Erros:
| Status | Descrição 	|
|--------|--------------|
|   409  | Conflict 	|
|   401  | Unauthorized |
|   404  | Not found 	|
|   403  | Forbidden 	|

---



