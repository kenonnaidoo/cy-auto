const {program} = require("commander");
const fs = require("fs");
const cheerio = require("cheerio")
const uuid = require("uuid");
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
    // Load the HTML string into cheerio
    const $ = cheerio.load(html, { xmlMode: true, decodeEntities: false });
    // Find all elements in the HTML tree
    const elements = $('*');
    // Get the list of ignored tags from the conf.json file
    const ignoredTags = getIgnoredTags()['ignoredTags'];
    // Loop through each element and add a unique "data-cy" attribute if it doesn't already have one
    elements.each((index, element) => {
        const tagName = element.tagName.toLowerCase();
        // Check if the element has a "data-cy"
        if (!$(element).attr('data-cy') && !ignoredTags.includes(tagName)) {
            // Add a unique "data-cy" attribute
            $(element).attr('data-cy', uuid.v4());
        }
    });
    // Get the HTML string
    let updatedHtml = $.html();
    // Replace attributes with empty values (="" or ='')
    updatedHtml = updatedHtml.replace(/=('|")\1/g, ' ');
    // Write the updated HTML back to the file
    fs.writeFileSync(path, updatedHtml, 'utf-8');
}
// export addDataTags function
module.exports = addDataTags;