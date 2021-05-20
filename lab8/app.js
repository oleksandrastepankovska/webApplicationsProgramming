const express = require('express');

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => res.send('Hello World!'));

require('./routes/product.routes')(app);


app.listen(3000, () => console.log('Server started'));