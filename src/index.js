const express = require('express');

const app = express();

app.use(express.json()) // middleware -> só para exibir um json no console.log(que é o terminal aqui do vs code)

/* 
GET - BUSCAR INFO NE
POST - INSERIR UMA INFO NO SERVIDOR
PUT - ALTERAR UMA INFORMACAO
PATCH - ALTER UMA INFO ESPECIFICA 
DELETE - DELETAR UMA INFO NO SERVIDOR
*/

/* 
tipo de parametros:
- route params => identificar um recurso para editar/deletar/buscar
- query params => Paginação / filtro de busca
- body params => Os objetos inserção/alteração (post,update,patch)(JSON)
*/
app.get("/courses",(request, response) => {
    const query = request.query;
    console.log(query);
    return response.json([
        'Curso 1',
        'Curso 2',
        'Curso 3',
    ])
});

app.post("/courses", (request, response) => {
    const body = request.body;
    console.log(body);
    return response.json([
        'Curso 1',
        'Curso 2',
        'Curso 3',
        'Curso 4',
    ])
});

app.put("/courses/:id", (request, response) => {
    const params = request.params;
    console.log(params);
    return response.json([
        'Curso 0',
        'Curso 2',
        'Curso 3',
        'Curso 4',       
    ])
});

app.patch("/courses/:id", (request, response) => {
    return response.json([
        'Curso um',  
        'Curso 2',
        'Curso 3',
        'Curso 4',        
    ])
});

app.delete("/courses/:id", (request, response) => {
    return response.json([  
        'Curso 2',
        'Curso 3',
        'Curso 4',        
    ])
});

app.listen(3333);