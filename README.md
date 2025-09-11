# Archcraft Wiki

Archcraft wiki é feito usando [Docusaurus 3](https://docusaurus.io/), um gerador de website estático moderno.

### Instalação

```
$ yarn
```

### Desenvolvimento local

```
$ yarn start
```

Esse comando começa o servidor para desenvolvivemnto local e o abre no navegador. As mudanças são refletidas ao vivo sem precisar recomeçar o servidor.

### Construir

```
$ yarn build
```

Esse comando gera um conteúdo estático na pasta `build` e pode ser usado por qualquer serviço de hospedagem estático.

### Lançamento

```
$ GIT_USER=<Seu usuário GitHub> USE_SSH=true yarn deploy
```

Se você estiver usando o GitHub pages para hospedagem, esse comando é uma forma conveniente para criar o site e enviá-lo para o branch `gh-pages`.
