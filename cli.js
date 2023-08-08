const program = require("commander");
const api = require("./index.js");
program
  .option("-x,--xxx", "output extra debugging")
  .option("-s,--small", "small pizza size")
  .option("-p,--pizza-type<type>", "flavour of pizza");
program
  .command("add")
  .description("add a task")
  .action((...args) => {
    const words = args.slice(0, -1).join(" ");
    api.add(words).then(console.log("success!"), console.log("fail"));
  });
program
  .command("clear")
  .description("clear all tasks")
  .action((...args) => {
    api.clear().then(console.log("success!"), console.log("fail!"));
  });

program.parse(process.argv);

if (process.argv.length === 2) {
  void api.showAll();
}
