const classificatorService = require("../services/classificatorService");

exports.rateImage = async (req, res) => {
  const image = req.files["image"];
  try {
    const classificationResult = await classificatorService.detectImageObjects(
      image.tempFilePath
    );

    if (classificationResult[0]) {
      const parsedResult = classificationResult[0].class;
      return res.json({
        rate: parsedResult,
      });
    }
    return res.json({
      rate: "Not found",
    });
  } catch (error) {
    console.log("ERRO:", error);
    return res.json({
      error,
    });
  }
};
