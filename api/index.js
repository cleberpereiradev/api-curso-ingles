const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3002 || process.env.PORT;

routes(app);

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
});

module.exports = app;