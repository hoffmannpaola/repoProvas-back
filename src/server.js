const app = require('./app');

const port = process.env.PORT;

app.listen(port, () => console.log(`Servidor on no port ${port}`));