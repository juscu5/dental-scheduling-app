const fs = require("fs");
const path = require("path");

const getListCSVFiles = async (folderPath, selectedDate) => {
  try {
    //checking if the folderPath is exist
    if (!fs.existsSync(folderPath)) {
      throw new Error("Folder does not exist");
    }

    const selectDate = selectedDate.slice(0, 4)

    //Checking files in Directory
    const filesInDirectory = fs.readdirSync(folderPath);

    //#region Listing Mallfile
    const mallFileDirectory = filesInDirectory
      .filter((file) => {
        const mallFileDate = file.slice(17, 21);

        return path.extname(file) === ".csv" && mallFileDate === selectDate;
      })
      .sort((a, b) => {
        //terminal
        const terminalA = a.split("_")[0].slice(-1);
        const terminalB = b.split("_")[0].slice(-1);

        //transaction
        const transactionA = a.split("_")[1].split(".")[0];
        const transactionB = b.split("_")[1].split(".")[0];

        //sorting by terminal and transaction
        if (terminalA === terminalB) {
          return transactionA - transactionB;
        }
        return terminalA - terminalB;
      })
      .map((file) => ({ name: file, path: path.join(folderPath, file) }));
    //#endregion

    //#region Listing EOD File
    const eodFileDirectory = filesInDirectory
      .filter((file) => {
        const eodFileDate = file.slice(20, 24);

        return path.extname(file) === ".csv" && eodFileDate === selectDate;
      })
      .sort((a, b) => {
        return a - b;
      })
      .map((file) => ({ name: file, path: path.join(folderPath, file) }));

    const files = {
      mallFiles: mallFileDirectory,
      eodFiles: eodFileDirectory,
    };
    //#endregion

    console.log("Successfully listed the files");
    return files;
  } catch (e) {
    console.log("There's an error while listing CSV Files ", e);
    return { message: `There's an error while listing CSV Files ${e}` };
  }
};

const combineCSVFiles = async (folderPath, selectedDate) => {
  try {
    //checking if the folderPath is exist
    if (!fs.existsSync(folderPath)) {
      throw new Error("Folder does not exist.");
    }

    const selectDate = selectedDate.slice(0, 4)

    //Checking consolidated folder if Existing or Not
    const consolidatedFolderPath = path.join(folderPath, "consolidated_files");
    if (!fs.existsSync(consolidatedFolderPath)) {
      fs.mkdirSync(consolidatedFolderPath);
      console.log("consolidated_files folder created successfully.");
    }

    //#region consolidate Mall Files
    const mallFiles = fs
      .readdirSync(folderPath)
      .filter((file) => {
        const fileDate = file.slice(17, 21);
        return (
          path.extname(file) === ".csv" &&
          fileDate === selectDate &&
          !file.includes("consolidated")
        );
      })
      .sort((a, b) => {
        //List by Terminal
        const terminalA = a.split("_")[0].slice(-1);
        const terminalB = b.split("_")[0].slice(-1);

        //List by Transaction
        const transactionA = a.split("_")[1].split(".")[0];
        const transactionB = b.split("_")[1].split(".")[0];

        //list by terminal and transaction
        return terminalA === terminalB
          ? transactionA - transactionB
          : terminalA - terminalB;
      });

    if (mallFiles.length === 0) {
      console.log("No Mall files found on the specified date.");
    }

    //Checking the terminal no
    const terminalNumbers = new Set(mallFiles.map(file => file.split("_")[0].slice(-3)));

    //Loop over each terminal no
    terminalNumbers.forEach(async terminalNo => {
      console.log(`Processing files for terminal: ${terminalNo}`);

      //Filter files for the current terminal
      const filesForTerminal = mallFiles.filter(file => file.split("_")[0].slice(-3) === terminalNo);

      if (filesForTerminal.length === 0) {
        console.log(`No files found for terminal: ${terminalNo}`);
        return;
      }

      //Mallfile Consolidated Filename
      const mallFileName = filesForTerminal[0].slice(0, 17);
      const outputMallFilePath = path.join(
        consolidatedFolderPath,
        `${mallFileName}${selectDate}${terminalNo}.csv`
      );

      //MallFile Data consolidation
      const consolidateMallfileData = await Promise.all(
        filesForTerminal.map(async (file) => {
          const mallFilePath = path.join(folderPath, file);
          const mallFileData = fs.readFileSync(mallFilePath, "utf-8");
          return mallFileData;
        })
      );

      //Trim each line and remove empty lines
      const trimmedData = consolidateMallfileData.flat().map(line => line.trim()).filter(line => line !== "");

      //Saving the consolidated mall files per transaction
      fs.writeFileSync(
        outputMallFilePath,
        trimmedData.join("\n")
      );

      console.log(`Consolidated file saved for terminal: ${terminalNo}`);
    });
    //#endregion

    //#region consolidate EOD Files
    const eodFiles = fs
      .readdirSync(folderPath)
      .filter((file) => {
        const fileDate = file.slice(20, 24);
        return (
          path.extname(file) === ".csv" &&
          fileDate === selectDate &&
          !file.includes("consolidated")
        );
      })
      .sort((a, b) => {
        return a - b;
      });

    if (eodFiles.length === 0) {
      console.log("No EOD files found on the specified date.");
    }

    //EOD File consolidated file name
    const eodFileName = eodFiles[0].slice(0, 20);
    const outputEodFilePath = path.join(
      consolidatedFolderPath,
      `${eodFileName}${selectDate}.csv`
    );

    //EOD File data consolidation
    const consolidateEODfileData = await Promise.all(
      eodFiles.map(async (file) => {
        const eodFilePath = path.join(folderPath, file);
        const eodFileData = fs.readFileSync(eodFilePath, "utf-8");
        const result = eodFileData.split("\n").map((row) => row.trim());
        return result;
      })
    );

    //Combine EOD data horizontally
    const combinedEODData = consolidateEODfileData[0].map((_, rowIndex) => {
      //first file with first Column
      const firstColumn = consolidateEODfileData[0][rowIndex].split(",")[0];

      //rest of the file without first column
      const otherColumns = consolidateEODfileData
        .slice(0)
        .map((fileData) => {
          const row = fileData[rowIndex] || "";
          return row.split(",").slice(1).join(",");
        })
        .join(",");

      return `${firstColumn},${otherColumns}`; // Combine the first column with the rest
    });

    //Saving the Consolidated EOD File
    fs.writeFileSync(outputEodFilePath, combinedEODData.join("\n"));
    //#endregion

    console.log("Consolidated files successfully saved!");
    return { message: `Files has been successfully consolidated` };
  } catch (e) {
    console.log("There's a problem while combining CSV File ", e);
    return { message: `There's a problem while combining CSV File ${e}` };
  }
};

module.exports = {
  combineCSVFiles,
  getListCSVFiles,
};
