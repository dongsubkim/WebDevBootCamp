const fs = require('fs');
const folderName = process.argv[2] || 'Project'
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("In the callbakc!!")
//     if (err) throw err;
// });
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, "");
    fs.writeFileSync(`${folderName}/app.js`, "");
    fs.writeFileSync(`${folderName}/style.css`, "");
} catch (e) {
    console.log("something went wrong!");
    console.log(e);
}