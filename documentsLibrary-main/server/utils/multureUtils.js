import multer from "multer";

//defining storage object for multure
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./temp/my-uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
//passing storage object inside multure
const upload = multer({ storage: storage });

export { upload };
