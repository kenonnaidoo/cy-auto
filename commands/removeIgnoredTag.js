const fs = require("fs");
const prettier = require("prettier");
//import getIgnoredTags function
const { getIgnoredTags, writeToConf } = require('../utils/common');
//removeIgnoredTag function
async function removeIgnoredTag(tag) {
    //read json file
    let conf = getIgnoredTags();
    //check if tag exists
    if (!conf['ignoredTags'].includes(tag)) {
        console.error(`Error: ${tag} is not an ignored tag`);
        process.exit(1);
    }
    //remove tag
    conf['ignoredTags'].splice(conf['ignoredTags'].indexOf(tag), 1);
    //format the HTML string
    const formatted = prettier.format(JSON.stringify(conf), { parser: 'json' });
    //write to json file
    await writeToConf(formatted);
    //return parsed data
    console.log(`${conf['ignoredTags'].length} total ignored tags: ${conf['ignoredTags'].join(', ')}`);
}
// export removeIgnoredTag function
module.exports = removeIgnoredTag;