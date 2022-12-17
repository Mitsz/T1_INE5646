# T1_INE5646

Repositório dedicado para a elaboração e desenvolvimento do trabalho 1 da disciplina de Programação para Web (INE5646) na UFSC

O trabalho ainda não tem um tema definido.

`npm i express mongoose connect-mongo express-session express-handlebars dotenv method-override moments morgan passport passport-google-oauth20`

`npm i -D nodemon cross-env`

Instruções para rodar o MongoDB no servidor da nuvem UFSC
Instalação:

`sudo apt-get install libcurl3 openssl liblzma5`

`wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1404-4.0.28.tgz`

`tar -zxvf mongodb-linux-x86_64-ubuntu1404-4.0.28.tgz`

`ln -s mongodb-linux-x86_64-ubuntu1404-4.0.28 mongodb`

`echo "export PATH=$HOME/mongodb/bin:$PATH" >> .profile`

`source .profile`

Para iniciar o daemon mongod:

`cd`

`mkdir -p databases/testdatabase`

`cd databases`

`nohup mongod --dbpath="./testdatabase" --smallfiles&`

`cat nohup.out`

PS: para fechar a sessão do PuTTY use o comando "exit".

Caso a sessão seja encerrada através do botão X na tela do PuTTY, o daemon será finalizado, mesmo tendo sido iniciado com 'nohup'.

Para testar o mongo shell:

`mongo`

`> show dbs`

`> use teste-db`

`> db.users.find()`

`> db.users.insertOne({nome: "Homer", sobrenome: "Simpson"})`

`> db.users.find()`

`> quit()`

## Development mode

`npm run dev`
