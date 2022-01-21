const express = require('express');

const app = express();

app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});

// GET /notes should return the notes.html file.

// GET * should return the index.html file.

// GET /api/notes should read the db.json file and return all saved notes as JSON.

// POST /api/notes should receive a new note to save on the request body, 
// add it to db.json, then return the new note to client.