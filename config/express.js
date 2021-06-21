const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const routes = require("../api/routes/routes");

const app = express();

exports.startServer = () => {
  app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "C:/Caio/face-detector/public/uploadedImages",
    })
  );
  app.use(bodyParser.json());

  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server initialized in port 8080`);
  });

  return app;
};

exports.routes = () => {
  app.use("/api", routes);
};
