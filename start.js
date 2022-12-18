const fs = require("fs")
const pdf = require("pdf-creator-node")
const html = fs.readFileSync("./public/index.html", "utf8")
const test = require("./test")

const options = {
   format: "A4",
   orientation: "portrait",
   border: "10mm",
   header: {
      height: "28mm",
      contents: {
         first: false,
         default: '<div style="text-align: center;">Author: Shyam Hajare</div>'
      },
   },
   footer: {
      height: "20mm",
      contents: {
         first: " ",
         // 2: "Second page", // Any page number is working. 1-based index
         default:
            `
               <div style="text-align:right; margin-top: 20px;">
                  <span>{{page}}</span>
                  /<span>{{pages}}</span>
               </div>
            `, // fallback value
         last: "Last Page",
      },
   },
}

const document = {
   html: html,
   path: "./output.pdf",
   data:{
      content: test
   },
   type: "",
}

pdf
   .create(document, options)
   .then((res) => {
      console.log(res)
   })
   .catch((error) => {
      console.error(error)
      process.exit(1)
   })
