# Rick and morty - Listagem de personagens
![image](https://github.com/fabiobessa/rick-and-morty/assets/91769397/ce93172a-b44f-49b4-ae56-cb81103c6b9f)

O projeto visa listar os personagens da série Rick and Morty, permitindo a pesquisa por nome dos personagens e/ou filtro por status (vivo, morto ou desconhecido).
Pelo fato da API retornar tudo em inglês a página e o código estão também em inglês.


# Rodando o projeto
Para rodar o projeto: 
- Clone o projeto
- Instale com node 18+:

```
npm install
```

- Rode o projeto com:

```
npm run dev
```

# Acessando testes com cypress
Para acessar os testes pela interface: 
- Rode o comando:

```
npx cypress open
```

# Pontos importantes
- Por ser uma única página e pouco complexa, optei por não configurar o vue-router e layouts
- Utilizei o pinia para controle de estados, facilitando o processo de fltros e requisições pra a API
- Optei por usar a biblioteca bootstrap para ter acesso um reset consistente de css e ferramentas de grid otimizadas
