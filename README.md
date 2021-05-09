# env-and-json
Fast &amp; lightweight npm package to convert env to json and json to env.

# Installation
`npm install env-and-json`

# Usage
Convert JSON objects to .env file

```
const { jsonToEnv } = require("env-and-json");

let object = {
  "key": "value"
  "key2": "value2"
}

jsonToEnv(object);

OUTPUT:-
KEY=value
KEY2=value2
```

Convert ENV file to JSON objects

```
const { envToJson } = require("env-and-json");
const fs = require("fs");

fs.readFile(".env", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let jsondata = JSON.parse(envToJson(data));
  console.log(jsondata);
});

OUTPUT:-
{
  "key": "value",
  "key2": "value2"
}
```
