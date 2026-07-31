const ImageKit = require("imagekit");
const AppError = require("../utils/AppError");

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

const uploadImageKit = (isMultiple = false, folder = "uploads") => {
  return async (req, res, next) => {
    const files = isMultiple ? req.files || [] : req.file ? [req.file] : [];

    if (files.length === 0) return next();

    const invalidFile = files.find(
      (file) => !file.mimetype.startsWith("image/"),
    );
    if (invalidFile) {
      throw new AppError("Only image files are allowed", 400);
    }

    const images = await Promise.all(
      files.map((file) =>
        imageKit.upload({
          file: file.buffer,
          fileName: `${Date.now()}-${file.originalname}`,
          folder,
          useUniqueFileName: true,
        }),
      ),
    );

    req.images = images.map((image) => image.url);
    next();
  };
};

module.exports = uploadImageKit;
