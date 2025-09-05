import { schema } from "./schema.js";
import { description, name, version } from "../package.json" with { type: "json" };
import { Option, program } from "commander";
import { stringify } from "yaml";

program
  .name(name)
  .version(version)
  .description(description)
  .addHelpText(
    "after",
    `
Example call:
  npx ${name} > bot-api-schema.json`,
  )
  .option("--yaml", "output in YAML format")
  .addOption(new Option("--json", "output in JSON format").conflicts("yaml"))
  .action((opts) => {
    let result;
    if (opts.yaml) result = stringify(schema);
    else result = JSON.stringify(schema, null, 2);
    console.log(result);
  })
  .parse();
