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

function envToJson() {}

module.exports = {
  jsonToEnv,
};
