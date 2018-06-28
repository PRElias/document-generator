# Introdução

Esse projeto é baseado no repositório ["mixu/markdown-styles"](https://github.com/mixu/markdown-styles).

Se você precisa ou pretende fazer modificações, recomendo fortemente o fork do projeto original. Há outros estilos e layouts nele, bem como orientações de como criar seu prório tema, mas eu foquei em um tema exclusivo pela praticidade, visando simplificar ao máximo o uso.

# Pré-requisitos

node / npm

Você precisará ter o ["npm"](https://www.npmjs.com/get-npm) instalado para conseguir executar. Além disso, é necessário ter instalado globalmente o pacote do markdown-styles e localmente o do replace-in-files, porém essas instalações são feitas automaticamente.

# Como usar

Baixe o projeto e execute o comando abaixo na pasta:

```
npm install
```

Esse comando baixará as dependências do projeto e instalará globalmente (o que permite o comando no console). 

A estrutura da solução é enxuta. Basta você escrever seus arquivos markdown (md) dentro da pasta input, conforme o arquivo de exemplo (index.md) e executar o comando abaixo:

```
npm run generate
```

Internamente, o comando original sendo executado é o seguinte:

```
generate-md --layout mixu-bootstrap-2col --input ./input --output ./generated
```

Caso você precise editá-lo, pode fazê-lo no arquivo package.json ou executando diretamente uma versão alternativa do mesmo no console.

O conteúdo da pasta generated (que só aparece após a geração e não é comitada no repositório) contém o HTML gerado automaticamente à partir dos arquivos markdown (*.md).

Os arquivos não são apagados na pasta numa nova geração, sendo interessante apagá-los manualmente caso a modificação não tenha sido exclusiva em seus conteúdos.

## Data da versão

Se o arquivo index.md tiver sido "comitado" no repositório antes da geração (o que é recomendável), a data do commit será apresentada no arquivo (conforme exemplo), no lugar da variável @version.

Sendo assim, é recomendável também que você mantenha toda sua documentação no próprio arquivo index.md, sem alterar seu nome ou pode, é claro, fazer as alterações ou incluir mais arquivos, mas aí precisará customizar o comando de geração.

Para gerar sem executar a atualização da data da versão use:

```
npm run generate:html
```

# Vantagens

As vantagens de uso dessa ferramenta são:

* Documentação controlada como código no repositório
* Disseminação do conhecimento sobre repositórios entre analistas
* Facilitação da exibição das regras em formato website (publicação)
* A linguagem markdown é mais simples que HTML
* Apresentação da data da versão no HTML