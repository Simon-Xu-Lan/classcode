const path = require("path");

module.exports = function(app) {
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

  app.get("/images", function(req, res) {

  })

  app.put("/images/:id", function(req, res) {
    
  })
};
