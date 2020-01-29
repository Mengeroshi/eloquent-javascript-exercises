let {readFile, writeFile} = require("fs");

readFile("20.Node.js/file.txt", "utf8", (error, text)=>{
    if(error) throw error;
    console.log("The file contains: ", text);
});

writeFile("20.Node.js/file.txt", "Node was here", err=>{
    if(err) console.log(`failed to write file: ${err}`);
    else console.log("file writen")
});