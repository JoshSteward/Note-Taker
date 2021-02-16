// We need to include the path package to get the correct file path for our html
const path = require('path');

module.exports = (app) => {
    //use app.get to handle GET requests 
    //takes you to the index page
    app.get('./index.html', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    //takes you to the note taking page
    app.get('./notes.html', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
        });
}

