module.exports = app => {
  const books = require("../controllers/books.controller.js");

  var router = require("express").Router();

  // Create a new Book
  router.post("/", books.create);


 // Retrieve all Books
  router.get("/", books.findAll);


 // Retrieve a single Book with id
  router.get("/:id", books.findOne);


  app.use("/api/books", router);
};
