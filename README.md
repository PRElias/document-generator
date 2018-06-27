# Introdução

Esse projeto é baseado no repositório ["mixu/markdown-styles"](https://github.com/mixu/markdown-styles).

Se você precisa ou pretende fazer modificações, recomendo fortemente o fork do projeto original. Há outros estilos e layouts no nele, bem como orientações de como criar seu prório tema, mas eu foquei em um tema exclusivo pela praticidade, visando simplificar ao máximo o uso.

A ideia é criar uma biblioteca ainda mais focada e objetiva que o próprio projeto markdown-styles, focando em facilitar e difundir o uso em ambientes diversos.

# Pré-requisitos

node / npm

# Como usar

Baixe o projeto e execute o comando abaixo na pasta:

```
npm install
```

A estrutura da solução é enxuta. Basta você escrever seus arquivos markdown (md) dentro da pasta input, conforme exemplo e executar o comando abaixo:

```
generate-md --layout mixu-bootstrap-2col --input ./input --output ./generated
```

O conteúdo da pasta generated (que não aparece no projeto pois é ignorada de propósito e não ser gravada) contém o HTML gerado automaticamente à partir dos arquivos markdown (*.md).

Este próprio arquivo README.md é um exemplo. O comando acima gera apenas arquivos contidos na pasta input, mas a sintaxe é a mesma, ou você pode, tanto copiar o arquivo para lá, como executar o comando tirando a pasta input para validar como fica o arquivo.

# Vantagens

As vantagens de uso dessa ferramenta são:

* Documentação controlada como código no repositório
* Disseminação do conhecimento sobre repositórios entre analistas
* Facilitação da exibição das regras em formato website
* A linguagem markdown é mais simples que HTML