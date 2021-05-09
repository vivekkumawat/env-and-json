function jsonToEnv(object) {
  if (!object || typeof object !== "object") {
    return "Please enter an valid object type.";
  }
  let envFile = "";
  for (const key of Object.keys(object)) {
    if (key != "id" && key != "token_secret") {
      envFile += `${key.toUpperCase()}=${object[key]}\n`;
    }
  }
  return envFile;
}

function envToJson(data) {
  if (!data || typeof data !== "string") {
    return "Please enter an valid string type.";
  }
  let splitData = data.split("\n");
  let envObjects = [];
  splitData.forEach((element) => {
    element = element.toLowerCase();
    envObjects.push(element.split("="));
  });
  return JSON.stringify(Object.fromEntries(envObjects));
}

module.exports = {
  jsonToEnv,
  envToJson,
};
