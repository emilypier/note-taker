const router = require('express').Router();
const db = require('../db')

// GET /api/notes should read db.json file & return all saved notes as JSON.
router.get('/notes', (req, res) => {
  db.readNotes().then((data)=>{
    return res.json(data)
  }).catch((err)=> res.json(err))
});


// POST /api/notes should receive a new note to save on the request body,
// add it to db.json, then return the new note to client.
router.post('/notes', (req, res) => {
  db.writeNotes(req.body).then((data) => {
    return res.json(data)
  }).catch((err) => res.json(err))
});


module.exports = router;