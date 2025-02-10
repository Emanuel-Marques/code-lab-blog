[JAVASCRIPT__BADGE]: https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript
[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript
[REACT__BADGE]: https://img.shields.io/badge/React-005CFE?style=for-the-badge&logo=react
[PROJECT__BADGE]: https://img.shields.io/badge/📱Visit_this_project-000?style=for-the-badge&logo=project
[PROJECT__URL]: https://code-lab-blog-seven.vercel.app/sign-in
[NEXTJS_BADGE]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[TAILWINDCSS]: https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC

<h1 align="center" style="font-weight: bold;"> Blog Challenge - CodeLab 💻</h1>

![typescript][TYPESCRIPT__BADGE] 
![react][REACT__BADGE]
![nextjs][NEXTJS_BADGE]
![tailwindcss][TAILWINDCSS]

<p align="center">
 <a href="#about">Sobre</a> • 
 <a href="#started">Começando</a> • 
  <a href="#started">Rotas da aplicação</a> • 
  <a href="#colab">Colaboradores</a> •
 <a href="#contribute">Contribuição</a>
</p>

<p align="center">
    <img src="./src/assets/capa-readme.png" alt="Image Example" width="600px">
</p>

<h2 id="started">📌 Sobre</h2>

Este é um projeto desenvolvido como parte de um desafio da comunidade CodeLab, cujo objetivo é criar uma página de blog funcional. O projeto inclui recursos como exibição de posts, barra de pesquisa e um botão para favoritar postagens.

<h2>🎨 Design no Figma</h2>
O design deste projeto pode ser visualizado no Figma através do link abaixo:
🔗 <a target="_blank" href="https://www.figma.com/design/Yb9IBH56g7T1hdIyZ3BMNO/Desafios---CodeLab?node-id=257087-590&t=kGZroqXeqTq204oQ-0">Design no Figma</a>

<h2>⚠️ Observação</h2>
O foco do projeto não é segurança. Sei que, em um sistema real, a autenticação não seria feita dessa forma. O armazenamento no localStorage e cookies é apenas para fins de teste e aprendizado.
<br />

[![project][PROJECT__BADGE]][PROJECT__URL]

<h2 id="started">🚀 Começando</h2>

<h3>Pré-requisitos</h3>

Pré-requisitos necessários para executar o projeto:

- Node.js (v22 ou superior)
- npm (v10 ou superior)
- Next.js (v15)

<h3>Clonando</h3>

Para clonar o repositório siga os seguintes passos: 

```bash
git clone https://github.com/Emanuel-Marques/code-lab-blog.git
```

<h3>Executando a Aplicação</h3>

Para executar o a aplicação siga os seguintes passos: 

```bash
cd code-lab-blog
npm install
npm run dev
```
Isso iniciará o servidor de desenvolvimento e você poderá visualizar a aplicação em `http://localhost:3000/`.

<h2 id="routes">📍 Rotas da Aplicação</h2>

Todas as rotas disponíveis na aplicação
| Rota               | Descrição                                          
|----------------------|-----------------------------------------------------
| <kbd>/</kbd>     | página principal
| <kbd>/sign-in</kbd>     | Página de login.
| <kbd>/register</kbd>     | Página de registro.
| <kbd>/nossa-academia</kbd>     | Apresentação da academia e dos líderes.

Além dos requisitos básicos do desafio, adicionei outras funcionalidades para explorar e aprimorar minhas habilidades:
<ul>
  <li>Autenticação de Usuário: Tela de login e registro, com autenticação armazenada em cookies e localStorage (apenas para fins de teste).</li>
  <li>Rotas Públicas e Privadas: Middleware para redirecionar usuários logados ao tentarem acessar páginas públicas e vice-versa.</li>
  <li>
    Favoritos: Os usuários podem marcar postagens como favoritas.
  </li>
  <li>Pesquisa de Posts: Barra de pesquisa para facilitar a navegação no conteúdo.</li>
  <li>Criação de Posts: Adição de um botão para que usuários possam criar novos posts.</li>
</ul>

<h2 id="colab">🤝 Colaboradores</h2>

Um agradecimento especial a todas as pessoas que contribuíram para este projeto.

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/70699733?v=4" width="100px;" alt="Emanuel Marques Profile Picture"/><br>
        <sub>
          <b>Emanuel Marques</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<h2 id="contribute">📫 Contribuição</h2>

Contribuições são bem-vindas! Por favor, faça um fork do repositório e envie um pull request para quaisquer melhorias ou correções de bugs.

1. `git clone https://github.com/Emanuel-Marques/code-lab-blog.git`
2. `git checkout -b feature/NAME`
3. Siga os padrões de commit
4. Abra um Pull Request explicando o problema resolvido ou o recurso criado, se houver, anexe uma captura de tela das modificações visuais e aguarde a revisão!

## Licença

Este projeto é licenciado sob a Licença MIT.

## Contato

Para qualquer dúvida ou feedback, entre em contato pelo email [Emanuel Marques](emanuelmarques585@gmail.com).

---

