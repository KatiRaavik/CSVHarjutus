
function csvToJSON() {
    return new Promise((resolve, reject) => {
        let result = [];
        // reading text file
        const fs = require('fs');
        let csvFile = fs.readFileSync('./data/LE.txt', 'latin1');
        // splitting by lines
        let lines = csvFile.split('\n');
        // splitting each line, pushing them to array, removing unwanted symbols
        for (let i=0;i<lines.length;i++){
          let parts=lines[i].split("\t");
            result.push({
                id: parts[0].replace(/^["\\"](.*)["\\"]$/, '$1'),
                name: parts[1].replace(/^["\\"](.*)["\\"]$/, '$1'),
                price: parts[8].replace(/^["\\"](.*)["\\"]$/, '$1')
            })
        }
    resolve(result);
    })
}

exports.csvToJSON = csvToJSON