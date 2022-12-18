const fs = require("fs")
const pdf = require("pdf-creator-node")
const html = fs.readFileSync("./public/index.html", "utf8")

const options = {
   format: "A3",
   orientation: "portrait",
   border: "10mm",
   header: {
      height: "45mm",
      contents: '<div style="text-align: center;">Author: Shyam Hajare</div>',
   },
   footer: {
      height: "28mm",
      contents: {
         first: "Cover page",
         2: "Second page", // Any page number is working. 1-based index
         default:
            '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
         last: "Last Page",
      },
   },
}

const document = {
   html: html,
   path: "./output.pdf",
   type: "",
}

pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  })