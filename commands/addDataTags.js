const {program} = require("commander");
const fs = require("fs");
const {JSDOM} = require("jsdom");
const uuid = require("uuid");
const prettier = require("prettier");
//import getIgnoredTags function
const { getIgnoredTags } = require("../utils/common");
//addDataTags command
function addDataTags(args){
    // Check that the --file option was specified
    if (!args.file) {
        console.error('Error: --file option is required');
        program.help();
        process.exit(1);
    }
    // Check if file has / at beginning
    let path;
    if (args.file[0] === '/') {
        path = `${process.cwd()}${args.file}`;
    }else{
        path = `${process.cwd()}/${args.file}`;
    }
    // Check if file exists
    if (!fs.existsSync(path)) {
        console.error(`Error: ${path} does not exist`);
        program.help();
        process.exit(1);
    }
    let html = fs.readFileSync(path, 'utf-8');
    // Parse the HTML string with JSDOM
    const dom = new JSDOM(html);
    const document = dom.window.document;
    // Find all elements in the HTML tree
    const elements = document.querySelectorAll('*');
    // Get the list of ignored tags from the conf.json file
    const ignoredTags = getIgnoredTags()['ignoredTags'];
    // Loop through each element and add a unique "data-cy" attribute if it doesn't already have one
    for (const element of elements) {
        // Check if the element has a "data-cy"
        if (!element.hasAttribute('data-cy') && !ignoredTags.includes(element.tagName.toLowerCase())) {
            // Add a unique "data-cy" attribute
            element.setAttribute('data-cy', uuid.v4());
        }
    }
    //format the HTML string
    const formatted = prettier.format(dom.serialize(), { parser: 'html' });
    // Write the updated HTML back to the file
    fs.writeFileSync(path, formatted, 'utf-8');
}
// export addDataTags function
module.exports = addDataTags;