Esse projeto é um fork do repositório mixu/markdown-styles

A ideia é criar uma biblioteca ainda mais focada e simples que o próprio projeto markdown-styles, visando facilitar e difundir o uso em projetos diversos

O conteúdo da pasta generated (que não aparece no projeto pois é ignorada de propósito) contém o HTML gerado automaticamente à partir dos arquivos markdown (*.md), através do comando abaixo:

generate-md --layout mixu-bootstrap-2col --input ./input --output ./generated

Há outros estilos e layouts no projeto original, mas eu foquei neste pela praticidade e, mais uma vez, visando simplificar ao máximo o uso.

Há um arquivo exemplo no diretório, chamado index.md e você deverá modificá-lo também, para que não seja gerado arquivos inúteis

# Vantagens

As vantagens de uso dessa ferramenta são:

* Documentação controlada como código no repositório
* Disseminação do conhecimento sobre repositórios entre analistas
* Facilitação da exibição das regras em formato website
* A linguagem markdown é mais simples que HTML