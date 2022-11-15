const fs = require("fs");

fs.writeFile("test.html", "hello", function (err){
    if(err) return console.error(err);
})