const db = require("./config/db");
const battleRepository = require("./repository/battleRepository");

const csv = require("csv-parser");
const fs = require("fs");

const importSheet = async () => {
  try {
    fs.createReadStream("./battles.csv")
      .pipe(csv())
      .on("data", async row => {
        await battleRepository.deleteMany({ Empresa: "1" });
        await battleRepository.create(row);
      })
      .on("end", () => {
        console.log("CSV importado com sucesso!");
      });
  } catch {}
};

importSheet();
