import { Command } from "commander";
import { loadPage } from '../index.js';

const program = new Command();

program
  .command('page-loader')
  .description('Loading requested resource by URL')
  .argument('<url>')
  .option('--v', 'output the version number')
  .option('-o --output [dir]', 'output dir (default: "/home/hex/app")')
  .action(async (url, options) => {
    const { output } = options;
    await loadPage(output, url)
  });

program.parse();

