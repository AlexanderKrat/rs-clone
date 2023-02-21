const jsonServer = require('json-server');
const db = {
  accounts: [ 
  {
    accountData:{
      'Id': '1',
      "Name": "ExampleName2",
      "Password": "ExamplePassword2"
    },
    games:{
      'game1': 'string',
      'game2': 'string',
      'game3': 'string',
    }
  }
]
};

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const PORT = 3000;
server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
