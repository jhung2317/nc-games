const express = require('express');
const { getCategories } = require('./controllers/categories.controllers');
const app = express();


app.get('/api', (request, response) => response.send({msg: 'all ok'}));
app.use('/api/categories', getCategories)

//Error-handling
app.all('*', ( req, res) => {
    res.status(404).send({ msg: 'Not Found.' });
});

// app.use((err, req, res, next) => {
//   if (err.code === '22P02') {
//     res.status(400).send({ msg: 'Invalid input' });
//   } else next(err);
// });

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: 'Internal Server Error' });
});

module.exports = app;
