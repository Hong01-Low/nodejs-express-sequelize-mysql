module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);
  console.log('new');

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);
  console.log('all1');

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);
  console.log('all2');

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);
  console.log('single');

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);
  console.log('update');

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);
  console.log('delete1');

  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);
  console.log('delete');

  app.use('/api/tutorials', router);
};