const { Toolkit } = require("actions-toolkit");

// Run your GitHub Action!
Toolkit.run(async tools => {
  // const contents = tools.getFile("service.metadata.json");
  console.log("Testing my action!");
  tools.exit.success("We did it!");
});

/**
 * Action that reads a file and validates it against a schema?
 *
 * Read the values from ENV or Args....
 */
