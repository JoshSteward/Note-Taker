//require index.js file
const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    
      // API GET Requests
    fs.readFile('db/db.json',"utf8",(error, indexData) => {
      if (error) throw error
      var data = JSON.parse(indexData);
    });
   

    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    app.get('/api/notes', (req, res) => res.json(data));

    //POST
    // Below code handles when a user submits a form and thus submits data to the server.
    app.post('/api/notes', (req,res) => {
      let newNote = req.body; 
      indexData.push(newNote);
      fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
        if (error) throw error;
        return true;
      });
      console.log("Note added")      
      //push new data into indexData     });
  });

}



