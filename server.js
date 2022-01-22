const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes); //tells the server that any time a client navigates to <ourhost>/api, the app will use the router we set up in apiRoutes.
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

// // GET /notes should return the notes.html file.
// app.get('/api/', (req, res) => {
//   res.json(notes);
// });

// // GET * should return the index.html file.

