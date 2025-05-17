const express = require("express");

const {
  combineCSVFiles,
  getListCSVFiles,
} = require("../services/consolidator.js");
const router = express.Router();

const initConsolidator = () => {
  router.get("/listCSVFile", async (req, res) => {
    try {
      const { folderPath, selectDate } = req.query;

      if (!folderPath) {
        return;
      }
      const files = await getListCSVFiles(folderPath, selectDate);

      console.log("MallFiles", files.mallFiles);
      console.log("EODFiles", files.eodFiles);

      res.status(200).json({ files });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });

  router.post("/combine-csv", async (req, res) => {
    const { folderPath, selectDate } = req.body;

    const formattedFolderPath = folderPath.replace(/\\/g, "\\\\");

    if (!folderPath || !selectDate) {
      return res
        .status(400)
        .json({ error: "folderPath and selectDate are required" });
    }

    try {
      await combineCSVFiles(formattedFolderPath, selectDate);

      res.json({
        message: "CSV files consolidate successfully!",
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  return router;
};

module.exports = {
  initRoutes: initConsolidator,
};
