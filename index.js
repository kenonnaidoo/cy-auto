#! /usr/bin/env node
const { program } = require('commander');
//addDataTags command import
const addDataTags = require('./commands/addDataTags');
//listIgnoredTags command import
const listIgnoredTags = require('./commands/listIgnoredTags');
//removeIgnoredTag command import
const addIgnoredTag = require('./commands/addIgnoredTag');
//addIgnoredTag command import
const removeIgnoredTag = require('./commands/removeIgnoredTag');
//addDataTags command
program
    .command('generate')
    .option('-f, --file <file>', 'Path to HTML file')
    .action(addDataTags)
//listIgnoredTags command
program
    .command('list-tags')
    .description('Lists all tags that get ignored when adding data attributes')
    .action(listIgnoredTags)
//removeIgnoredTag command
program
    .command('remove <tag>')
    .description('Removes a tag from the list of tags that get ignored when adding data attributes')
    .action(removeIgnoredTag)
//addIgnoredTag command
program
    .command('add <tag>')
    .description('Adds a tag to the list of tags that get ignored when adding data attributes')
    .action(addIgnoredTag);
// Parse the arguments
program.parse(process.argv)