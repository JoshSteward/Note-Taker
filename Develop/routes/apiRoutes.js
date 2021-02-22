//require index.js file
const fs = require('fs');
const path = require('path');
const data = require('../db/db.json');
console.log("data: ", data);
//module.exports = router;
let noteHolder;


module.exports = (app) => {
    
      // API GET Requests
    fs.readFile('db/db.json',"utf8",(error, indexData) => {
      console.log("read sucessful");
      if (error) throw error
      var data = JSON.parse(indexData);
      console.log(data);
    });
   

    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    app.get('/api/notes', (req, res) => res.json(data));

    //POST
    // Below code handles when a user submits a form and thus submits data to the server.
    app.post('/api/notes', (req,res) => {
      let newNote = req.body; 
      readFileAsync(path.join(__dirname, "./db/db.json"), "utf8")
      .then(function(data){
        noteHolder = JSON.parse(data);
        if (newNote === 0 || newNote.id) {
          let currentNote = noteHolder[newNote.id];
          currentNote.title = newNote.title;
          currentNote.text = newNote.text;
        } else {
          currentNote.push(newNote);
        }
        writefileAsync(path.join(__dirname, "./db/db.json"), JSON.stringify(currentNote))
                .then(function () {
                    console.log("Wrote db.json");
      });
      //console.log("newNote added");
      //data.push(newNote);
      //fs.writeFile("db/db.json",JSON.stringify(data,'\t'),error => {
       // if (error) throw error;
      //  return true;
      //});
      //console.log("Note added")      
      //push new data into indexData     });
  //});

      });
      res.json(newNote);
    });

  }



