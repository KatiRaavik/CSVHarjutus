const { csvToJSON } = require('../data/SearchData');
const { PartsSearch } = require('../views/layout');

function SearchController(req, res) {
  if (req.query.keyword==='undefined' || !req.query.keyword) {
    return new Promise((resolve, reject) => {
      csvToJSON().then(result => {
        result;
        let page = req.query.page || 1;
        const rows = 20;
        var trimStart = (page-1)*rows;
        var trimEnd = trimStart+rows;
        var querySet = result.slice(trimStart, trimEnd);
        resolve(querySet, page);
        
        res.send(PartsSearch(querySet, page));
      })
    })   
  }

  csvToJSON().then(result => {
    result = result.filter(parts => parts.name.includes(req.query.keyword))
    let page = req.query.page || 1;
    const rows = 20;
    var trimStart = (page-1)*rows;
    var trimEnd = trimStart+rows;
    var pages = Math.ceil(result.length%rows);
    var querySet = result.slice(trimStart, trimEnd);
    let searchWord = req.query.keyword;
    
    res.send(PartsSearch(querySet, page, searchWord));
  })
}

exports.SearchController = SearchController