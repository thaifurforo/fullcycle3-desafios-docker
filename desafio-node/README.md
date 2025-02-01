# FullCycle 3.0
## Desafio Node + Nginx como proxy reverso

### Desafio

O desafio é composto por:
- Criar um docker-compose que disponibilize uma aplicação em node.js na porta 8080
- O retorno da aplicação node.js para o nginx deverá ser: `<h1>Full Cycle Rocks!</h1>`
- Deverá retornar também a lista de nomes cadastrada no banco de dados, na tabela `people`

### Resultado

- Ao subir o docker-compose, três containers são montados: app, db e nginx
- O container app se trata de uma aplicação node.js que irá conectar-se ao banco de dados mysql existente no container db
- Ela irá criar uma tabela `people` (se já não existir) e inserir uma linha com o valor `Thainara` na coluna `nome`
- O container nginx realiza o proxy reverso da aplicação node, e dessa forma expõe na porta 8080 a aplicação
- Ao acessar localhost:8080 é possível visualizar o retorno `<h1>Full Cycle Rocks!</h1>` seguido dos valores das linhas existentes na tabela `people`

### Referências

Além das aulas do FullCycle, foram usados como referência para este desafio:
- [[LogRocket] How to use Nginx as a reverse proxy for a Node.js server](https://blog.logrocket.com/how-to-run-node-js-server-nginx/)