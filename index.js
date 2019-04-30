const { Toolkit } = require("actions-toolkit");

// Run your GitHub Action!
Toolkit.run(async tools => {
  const template = tools.arguments._[0] || "service.metadata.json";

  tools.log.debug("Reading from file", template);

  const file = tools.getFile(template);

  tools.log.debug("File", file);

  tools.exit.success("Data is all valid");
});
