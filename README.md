## Sobre e Autor
Mauricio Goulart Rosa Filho
## INSTALAÇÃO
npm install mongoose
npm install express
npm install cors
npm start
porta 8080 (localhost)
## ENDPOINTS
### Usuarios
### Modelo de Dado
    {
        nome: String,
        senha: String,
        idade: String,
    }

### GET
#### Requisição
    {
        /api/usuarios/:id (:id se necessário)
    }

#### Exemplo de resposta
    {
        "_id": "616f3c053118f7aa2aa5e940",
        "nome": "Mauricio Goulart Rosa",
        "senha": "321",
        "idade": "31",
        "__v": 0
    }

#### Erros
    {
    404 Not Found 
    }

#### Filtros
    {
        page={quantidade}
        limit={quantidade}
        senha={senha}
    }

### POST
#### Requisição
    {
        /api/usuarios
    }

#### Exemplo de resposta
    {
        "_id": "616f3c053118f7aa2aa5e940",
        "nome": "Mauricio Goulart Rosa",
        "senha": "321",
        "idade": "31",
        "__v": 0
    }

#### Erros
    {
        Não possui erros na requisição
    }   

### PUT
#### Requisição
    {
        /api/usuarios/:id
    }

#### Exemplo de resposta
    {
        "_id": "616f3c053118f7aa2aa5e940",
        "nome": "Mauricio Goulart Rosa",
        "senha": "321",
        "idade": "31",
        "__v": 0
    }

#### Erros
    {
        400 Bad Request 
        404 Not Found 
    }

### DELETE
#### Requisição
    {
        /api/usuarios/:id 
    }
#### Exemplo de resposta
    {
        "_id": "616f3c053118f7aa2aa5e940",
        "nome": "Mauricio Goulart Rosa",
        "senha": "321",
        "idade": "31",
        "__v": 0
    }
#### Erros
    {
        400 Bad Request 
        404 Not Found    
    }

### Produtos
### Modelo de Dado
    {
        nome: String,
        valor: String,
        descricao: String,
        codigo: {
            type: String,
            unique: true
        },
    }

### GET
#### Requisição
    {
        /api/produtos/:id (:id se necessário)
    }

#### Exemplo de resposta
    {
        "_id": "616f3428c7210837daf766ba",
        "nome": "Produto 3",
        "valor": "50,00",
        "descricao": "Produto 1",
        "codigo": "12345",
        "__v": 0
    }

#### Erros
    {
        404 Not Found
    }
#### Filtros
    {
        page={quantidade}
        limit={quantidade}
        codigo={codigo}
    }

### POST

#### Requisição
    {
        /api/produtos
    }
#### Exemplo de resposta
    {
        "nome": "Produto 3",
        "valor": "50,00",
        "descricao": "Produto 1",
        "codigo": "12351",
        "_id": "616f497c1467d881b8c031c1",
        "__v": 0
    }

#### Erros
    {
        Erro ao tentar criar produto com mesmo codigo
    } 
### PUT
    
#### Requisição
    {
        /api/produtos/:id
    }

#### Exemplo de resposta
    {
        "_id": "616f3428c7210837daf766ba",
        "nome": "Produto 3",
        "valor": "50,00",
        "descricao": "Produto 1",
        "codigo": "12345",
        "__v": 0
    }
#### Erros
    {
        400 Bad Request 
        404 Not Found  
    }

### DELETE
#### Requisição
    {
        /api/produtos/:id 
    }
#### Exemplo de resposta
    {
        "_id": "616f3428c7210837daf766ba",
        "nome": "Teste",
        "valor": "50,00",
        "descricao": "Produto 1",
        "codigo": "12345",
        "__v": 0
    }
#### Erros
    {
        400 Bad Request 
        404 Not Found  
    }

### Enderecos
### Modelo de Dado
    {
        cep: String,
        rua: String,
        numero: String,
        bairro: String,
        cidade: String,
        pais: String
    }
    
### GET
#### Requisição
    {
        /api/enderecos
        /api/enderecos/:id
    }
#### Exemplo de resposta
    {
        "_id": "616f1a4f8d441c43da692759",
        "cep": "88804080",
        "numero": "522",
        "bairro": "Santa Bárbara",
        "cidade": "Criciúma",
        "pais": "Brasil",
        "__v": 0
    }
#### Erros
    {
        404 Not Found
    }
#### Filtros
    {
        page={quantidade}
        limit={quantidade}
        cep={cep}
    }

### POST
#### Requisição
    {
        /api/enderecos
    }
#### Exemplo de resposta
    {
        "cep": "888010100",
        "rua": "Silvestre Scotti",
        "numero": "522",
        "bairro": "Santa Bárbara",
        "cidade": "Criciúma",
        "pais": "Brasil",
        "_id": "616f4c4c8fede99f1a0ffcc8",
        "__v": 0
    }
#### Erros
    {
        Não possui erros na requisição
    }

### PUT
#### Requisição
    {
        /api/enderecos/:id
    }
#### Exemplo de resposta
    {
        "cep": "888010100",
        "rua": "Silvestre Scotti",
        "numero": "522",
        "bairro": "Santa Bárbara",
        "cidade": "Criciúma",
        "pais": "Brasil",
        "_id": "616f4c4c8fede99f1a0ffcc8",
        "__v": 0
    }
#### Erros
    {
        400 Bad Request 
        404 Not Found  
    }
### DELETE
#### Requisição
    {
        /api/enderecos/:id
    }
#### Exemplo de resposta
    {
        "cep": "888010100",
        "rua": "Silvestre Scotti",
        "numero": "522",
        "bairro": "Santa Bárbara",
        "cidade": "Criciúma",
        "pais": "Brasil",
        "_id": "616f4c4c8fede99f1a0ffcc8",
        "__v": 0
    }
#### Erros
    {
        400 Bad Request 
        404 Not Found  
    }