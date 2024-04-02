#!/usr/bin/node
//  shebang

import { Command } from "commander";

const program = new Command();

program
    .command("welcome")
    .description("Greeting the user")
    .alias("wlcm")
    .action(() => console.log("Hello User, Have a good day"));

program
    .option("-gm --goodM", "Say good morning!")
    .action(() => console.log("Good Morning, User!"));

program.parse();
