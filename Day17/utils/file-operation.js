const fs = require("fs/promises");

const readFile = async (fileName) => {
  try {
    const data = await fs.readFile(fileName, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const writeFile = async (fileName, data) => {
  await fs.writeFile(fileName, JSON.stringify(data, null, 2), "utf-8");
};

module.exports = { readFile, writeFile };
