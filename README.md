Aqui está um exemplo de um arquivo README.md para o seu repositório no GitHub, que pode ser utilizado para este desafio:

---

# Desafio de Desenvolvimento de Loja Online

## Diretrizes do Desafio

O objetivo principal desta avaliação é analisar sua habilidade em criar um código que seja claro, bem testado e reutilizável. Após concluir a tarefa, faça o deployment da aplicação e forneça os links correspondentes ao aplicativo e ao repositório. Este processo é essencial para a avaliação completa de suas habilidades e para o avanço no processo de seleção.

## Tarefa (Funcional)

Para este desafio, você deve consumir nossa API REST de produtos para exibir a lista de produtos da loja.

### Requisitos da Aplicação

- **Loja**: A lista de produtos deve ser buscada de nossa API. Use um shimmer/skeleton enquanto estiver em loading.
- **Carrinho**: O carrinho deve conter todos os produtos selecionados, juntamente com a opção de aumentar a quantidade de cada produto.

### Testes

Use Jest e a testing-library para realizar os testes unitários.

## Recursos

- **UI/UX**: [Figma](https://www.figma.com/) - Inclui o design system e a fonte.
- **API**: API REST de produtos para exibir a lista de produtos da loja.

## Ferramentas Requeridas

- TypeScript
- React ou Next.js (Preferimos Next.js)
- React-query
- Styled-components ou SASS
- Framer-motion
- Jest

## Aspectos Técnicos

Todas as ferramentas listadas acima são requisitos essenciais para este projeto. Sinta-se à vontade para usar qualquer outra tecnologia que achar pertinente e com a qual se sinta confortável. Esta flexibilidade permite que você demonstre suas habilidades e implemente soluções que melhor se alinhem à sua abordagem e experiência.

## Deploy

Ao concluir o desenvolvimento, faça o deployment da aplicação no ambiente de sua preferência (por exemplo, AWS Amplify, Vercel, Netlify, Heroku, Amazon EC2, App Runner, entre outros). Assegure-se de que o aplicativo esteja acessível de forma estável e eficaz para a avaliação subsequente.

## Como Rodar o Projeto Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Instale as dependências:
   ```bash
   cd nome-do-repositorio
   npm install
   ```
3. Crie um arquivo `.env` com as seguintes variáveis de ambiente:
   ```env
   REACT_APP_API_URL=https://api.url.com
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Testes

Para rodar os testes, use o comando:
```bash
npm test
```

## Links

- [Deploy da Aplicação]([https://link-do-deploy.com](https://gabriel-aparecido03.github.io/mks-challenge/))
- [Repositório no GitHub](https://github.com/Gabriel-Aparecido03/mks-challenge)
