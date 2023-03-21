const fs = require("fs");

// read data from user.json
let data = fs.readFileSync("./user.json");
// convert JSON to javascript object
data = JSON.parse(data);

// manipulate data. in this case we add another dummy data.
// you can delete, replace, modify data property.
data.user.push({
    id: 2,
    email: "email2@gmail.com",
    password: "def123"
});

// convert javascript object to JSON
data = JSON.stringify(data);

// overwrite user.json with new JSON data
fs.writeFile("./user.json", data, (err) => {
    if (err) throw err;
    console.log("data saved successfully");
});
