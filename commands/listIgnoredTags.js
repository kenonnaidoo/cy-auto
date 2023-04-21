//import common
const { getIgnoredTags } = require('../utils/common');

async function listIgnoredTags () {
    //get ignored tags from common.js
    let conf = getIgnoredTags();
    //parse ignored tags from JSON string to array
    let ignoredTags = conf['ignoredTags'];
    //list ignored tags
    console.log(`${ignoredTags.length} total ignored tags: ${ignoredTags.join(', ')}`);
}

//export listIgnoredTags function
module.exports = listIgnoredTags;