# URL Shortener API

## :portugal: Encurte suas URLs!

Crie uma hash exclusiva de 9 caracteres para cada URL e a mantenha armazenada em um banco de dados para reusá-la quando quiser.

### Como Funciona

A API recebe requisições em protocolo HTTP via POST de qualquer URL no formato JSON.

Exemplo:

```JSON
{
    "originURL": "https://www.tecmundo.com.br/minha-serie/228201-simpsons-especial-ned-flanders-ganha-trailer-assista.htm"
}
```

Com esse dado é criado e armazenado no banco de dados MongoDB Atlas um documento, contendo um ID único (este gerado pelo MongoDB), um hash de 9 caracteres (gerado pela API), a URL original que fora enviada na requisição e a URL abreviada. Este documento também é retornado em formato JSON ao cliente na resposta da requisição.

```JSON
{"_id":{"$oid":"6189e1a3df40273a7c5c3117"},
"hash":"qBKKAgHIW",
"originURL":"https://www.tecmundo.com.br/minha-serie/228201-simpsons-especial-ned-flanders-ganha-trailer-assista.htm",
"shortURL":"http://localhost:3333/qBKKAgHIW",
"__v":{"$numberInt":"0"}}
```

Em caso de endereço inválido, o cliente recebe o status code 404.

### Como Usar

- Faça o clone do repositório para o seu diretório local de preferência.
- Crie um banco de dados MongoDB em sua máquina local ou na nuvem. Este projeto foi criado com o [MongoDB Atlas](https://www.mongodb.com/pt-br/cloud/atlas/register).
  (Por questões de segurança, as informações sensíveis do banco de dados usadas no projeto foram removidas do repositório).
- Adicione a URL de conexão do seu banco de dados MongoDB Atlas (com sua senha e nome do seu banco de dados criado) ao arquivo /src/config/Constants.ts, como valor da chave MONGO_CONNECT.

```
export const config = {
 API_URL: "http://localhost:3333",
 MONGO_CONNECT:
   "Please create your own MongoDB Atlas Database and paste its URL between these quotes",
};
```

- No terminal de comando, dentro de seu repositório local, execute os scripts abaixo em duas abas separadas:

```
$ npm run buildwatch
$ npm run dev
```

- Execute as requisições através de sua plataforma de API favorita (Postman, Insomnia, etc.) ou através de sua aplicação front-end.

Espero que goste!

### Tecnologias Utilizadas

- [Node.JS](https://nodejs.org/pt-br/)
- [Express](http://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/pt/)
- [MongoDB Atlas](https://www.mongodb.com/pt-br/cloud/atlas/register)
- [Mongoose](https://mongoosejs.com/)
- [Typegoose](https://www.npmjs.com/package/@typegoose/typegoose)
- [ShortID](https://www.npmjs.com/package/shortid)
- [ESLint](https://eslint.org/)
- [Nodemon](https://nodemon.io/)
- [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)
