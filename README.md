# env-and-json
Fast &amp; lightweight npm package to convert env to json and json to env.

# Installation
`npm install env-and-json`

# Usage
Convert JSON object to .env file

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