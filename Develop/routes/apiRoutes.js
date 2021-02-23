//require index.js file
const fs = require('fs');
const path = require('path');


const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../db/db.json'), (err) => {
  if (err) throw err;
})
);

console.log("data: ", data);



module.exports = (app) => {
  //use app.get
  app.get('/api/notes', (req, res) => res.json(data));

  //use app.post to write file
  app.post('/api/notes', (req,res) => {
    let newNote = req.body; 
    console.log("newNote: " + newNote);
    console.log("data: ", data);
    data.push(newNote);
    console.log("new note pushed");
      fs.writeFileSync(
        path.join(__dirname,"../db/db.json"),
        JSON.stringify(data),
        console.log("data passed through JSON.stringify"),
        err => {
        if (err) throw err;
        }
      );
      //without return data only moves into left column upon refreshing page 
      return res.json(data);
  });
}


/* 

    
      // API GET Requests
    fs.readFile('db/db.json',"utf8",(error, indexData) => {
      console.log("read sucessful");
      if (error) throw error
      var data = JSON.parse(indexData);
      console.log(data);
    });
   
    //POST
    // Below code handles when a user submits a form and thus submits data to the server.
    app.post('/api/notes', (req,res) => {
      let newNote = req.body; 
      readFileAsync(path.join(__dirname, "./db/db.json"), "utf8")
      .then(function(data){
        //noteHolder = JSON.parse(data);
        
          currentNote.push(newNote);
       // }
        writefileAsync(path.join(__dirname, "./db/db.json"), JSON.stringify(currentNote))
                .then(function () {
                    console.log("Wrote db.json");
      });
      console.log("newNote added");
      data.push(newNote);
      fs.writeFile("db/db.json",JSON.stringify(data,'\t'),error => {
        if (error) throw error;
        return true;
      });
      console.log("Note added")      
      //push new data into indexData     });
  //});

      });
      res.json(newNote);
    });

  }


*/ 
