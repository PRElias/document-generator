const exec = require('child_process').execSync;
const replace = require('replace-in-file');

//Monta o comando
const ls = exec('git log -1 --format=%cd input/index.md');

//Executa o comando de forma síncrona colocando o resultado na variável
var versionDate = ls.toString();

//Trocando a variável no arquivo
const options = {
  files: 'generated/index.html',
  from: '@version',
  to: versionDate,
};

replace(options, (error, changes) => {
    if (error) {
      return console.error('Error occurred:', error);
    }
    console.log('Modified files:', changes.join(', '));
  });