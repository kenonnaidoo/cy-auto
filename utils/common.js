const fs = require("fs");
// common class
class common {
    // method to read from json file
    static getIgnoredTags () {
        //read json file
        let data = fs.readFileSync(`${__dirname}/../conf.json`, 'utf-8');
        //return parsed data
        return JSON.parse(data);
    }

    // method to write to conf.json file
    static async writeToConf (formatted) {
        // write to conf file
        await fs.writeFileSync(`${__dirname}/../conf.json`, formatted, 'utf-8');
    }
}
// export getIgnoredTags function
module.exports = common;