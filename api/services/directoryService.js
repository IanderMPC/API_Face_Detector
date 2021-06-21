const fs = require("fs");
const path = require("path");

exports.removeSnapshotsFiles = (directoryPath) => {
  fs.readdir(directoryPath, (directoryError, files) => {
    if (directoryError) {
      throw directoryError;
    }

    for (const file of files) {
      fs.unlink(path.join(directoryPath, file), (fileError) => {
        if (fileError) {
          throw fileError;
        }
      });
    }
  });
};
