# projeto-api-restaurante
 Desenvolvendo uma API para um restaurante utilizando node.js com express e fazendo a modelagem de dados com o banco de dados SQLite.

1 - Criamos o arquivo packege.json dando o comando npm init -y, aonde também já definimos a description do projeto e o author do projeto.

2 - instalamos as pacotes necessárias para o projeto, que foram as seguintes:

dependências de desenvolvimento:
npm i typescript -D : comando utilizado para instalar o typescript no projeto.
npm i --save -dev @types/express : comando utilizado para instalar o typescript para o express.

dependências:	
npm i express : comando utilizado para instalar o express.

3 - Criamos o arquivo tsconfig.json para definir as configurações do typescript, que foram as seguintes:

no compilerOptions definimos o seguinte:  
target: que define a versão do javascript que o typescript vai gerar. no caso escolhemos a versão "ES2022".

lib: que define a biblioteca que o typescript vai gerar. no caso escolhemos a biblioteca "ES2022".

paths: que define o caminho dos arquivos que o typescript vai gerar. no caso escolhemos o caminho "./src/*".

module: que define o tipo de módulo que o typescript vai gerar. no caso escolhemos o tipo "Node16".

esModuleInterop: que define se o typescript vai gerar módulos interop. no caso escolhemos true.

forceConsistentCasingInFileNames: que define se o typescript vai gerar nomes de arquivos com casing consistente. no caso escolhemos true.

strict: que define se o typescript vai gerar erros estritos. no caso escolhemos true.

skipLibCheck: que define se o typescript vai pular a verificação da biblioteca. no caso escolhemos true.

4 - Criamos a pasta src e dentro dela criamos o arquivo server.ts para definir a configuração do servidor. 

5 - Voltamos para o arquivo package.json, instalamos o tsx como uma dependência de desenvolvimento através do comando npm i tsx@4.16.2 -d  e após isso definimos o script start para iniciar o servidor "dev": "tsx watch src/server.ts" utilizamos o watch que é a flag para ele ficar visualizando se o arquivo teve alguma alteração. damos o comando no terminal npm run dev e ele vai iniciar o servidor.



