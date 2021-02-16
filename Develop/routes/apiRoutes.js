//require index.js file
const indexData = require('../public/assets/js/index');

module.exports = (app) => {
    
    // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  app.get('/api/notes', (req, res) => res.json(indexData));

  // Below code handles when a user submits a form and thus submits data to the server.
  app.post('.api/notes', (req,res) => {
  });
}


