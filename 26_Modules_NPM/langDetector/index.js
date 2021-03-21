const langs = require("langs");
const franc = require("franc");
const colors = require("colors");

const text = process.argv[2]

const langCode = franc(text);
if (langCode === "und") {
    console.log("Sample Too Short".red)
} else {
    const langName = langs.where("3", langCode);
    console.log(langName.name.green);
}