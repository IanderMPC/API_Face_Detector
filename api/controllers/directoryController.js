const directoryService = require("../services/directoryService");

exports.removeSnapshotsFiles = (req, res) => {
  try {
    const directoryPath = "public/uploadedImages";
    directoryService.removeSnapshotsFiles(directoryPath);
    return res.json({
      result: "OK",
    });
  } catch (error) {
    console.log("ERRO:", error);
    return res.json({
      error,
    });
  }
};
