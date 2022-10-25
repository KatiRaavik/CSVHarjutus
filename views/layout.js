function PartsSearch(result=[], page, searchWord) {
  return `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Document</title>
              <script lang="javascript"></script>
            </head>
            <body>
              <form action="" method="GET">
              <label>Otsi varuosa</label>
              <input type="text" value=${searchWord} name="keyword"/>
              <input type="submit" value="Otsi" />
              <button href="" value=${page-1} name="page" onClick=${page++}>Eelmised 20</button>
              <button href="" value=${page} name="page" onClick=${page--}>Järgmised 20</button>
              </form>

              <table>
                ${result.map(parts => `<tr>
                  <td>${parts.id}</td>
                  <td>${parts.name}</td>
                  <td>${parts.price}</td>
                </tr>`).join("")}
              <table>
            </body>
          </html>`
}

exports.PartsSearch = PartsSearch