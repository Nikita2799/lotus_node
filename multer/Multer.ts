import multer from "multer";

const storageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./img"); //Здесь указывается путь для сохранения файлов
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const multerApi = multer({ storage: storageConfig }).single("image");
