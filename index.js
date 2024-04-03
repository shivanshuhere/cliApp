#!/usr/bin/node
//  shebang

import { Command } from "commander";
import getIplInfo from "./api.js";
const program = new Command();

program
    .command("IPL")
    .description("Greeting current match information")
    .alias("i")
    .action(() => getIplInfo());

program.parse();
