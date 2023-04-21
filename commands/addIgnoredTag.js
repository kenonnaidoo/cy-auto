const prettier = require("prettier");
//import getIgnoredTags function
const { getIgnoredTags, writeToConf } = require('../utils/common');
async function addIgnoredTag(tag) {
    //read json file
    let conf = getIgnoredTags();
    //set ignored tags
    conf['ignoredTags'].push(tag);
    //format the HTML string
    const formatted = prettier.format(JSON.stringify(conf), { parser: 'json' });
    //write to json file
    await writeToConf(formatted);
    //return parsed data
    console.log(`${conf['ignoredTags'].length} total ignored tags: ${conf['ignoredTags'].join(', ')}`);
}
// export addIgnoredTag function
module.exports = addIgnoredTag;