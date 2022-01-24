const fs = require('fs');
const uuid = require('uuid/v1');
const util = require('util'); //gives each note a unique id
const { stringify } = require('querystring');

const readAsync = util.promisify(fs.readFile); 
const writeAsync = util.promisify(fs.writeFile);
const deleteAsync = util.promisify(fs.unlink)

class DB {
  read(){
    return readAsync('db/db.json', 'utf-8')
  }

  write(note){
    return writeAsync('db/db.json', JSON.stringify(note));
  }

  delete(note){
    return deleteAsync('db/db.json', JSON.stringify(note));
  }

  readNotes(){
    return this.read().then((notes)=>{
      let allNotes;

      try{
        allNotes = [].concat(JSON.parse(notes))
      }catch(err){
        allNotes = []
      }

      return allNotes;
    })
  }

  writeNotes(note){
    const {title, text} = note; //deconstructing note
    const newNote = {
      title, text, id: uuid() //unique id
    }

    return this.readNotes().then((notes)=>{
      return [...notes, newNote]
    }).then((newNotesArray) => {
      return this.write(newNotesArray)
    })
  }

  // deleteNote(note){
  //   const id = id.uuid(); //the note's unique id
    
  //   return this.deleteNote().then((notes) => {
  //   delete notes[id]; //deletes note with that id   
  // }).then((newNotesArray) => {
  //   return this.delete(newNotesArray)
  // });

};

module.exports = new DB();