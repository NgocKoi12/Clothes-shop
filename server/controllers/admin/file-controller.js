const mongoose = require("mongoose");
const multer = require("multer");
const { MongoClient, GridFSBucket, ObjectId } = require("mongodb");

const mongoURI = "mongodb://localhost:27017/";
const dbName = "test"; // Replace with your database name

let gfsBucket;
MongoClient.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    const db = client.db(dbName);
    gfsBucket = new GridFSBucket(db, { bucketName: "uploads" });
  })
  .catch((err) => console.error(err));

// Multer storage configuration
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Not an image! Please upload an image."), false);
    }
  },
});

// 📌 Upload file
const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const uploadStream = gfsBucket.openUploadStream(`${req.file.originalname}`, {
    contentType: req.file.mimetype,
  });

  uploadStream.end(req.file.buffer);

  uploadStream.on("finish", () => {
    res.status(201).json({ status: 201, message: "file uploaded successfully", data: {fileID: uploadStream.id, fileName: uploadStream.filename }});
  });

  uploadStream.on("error", (err) => {
    res.status(500).json({status: 500, message: err.message });
  });
};

// 📌 Lấy danh sách file
const getAllFiles = async (req, res) => {
  try {
    const files = await gfsBucket.find().toArray();
    res.json(files);
  } catch (err) {
   res.status(500).json({status: 500, message: err.message });
  }
};

// 📌 Lấy file theo filename
const getFileByName = async (req, res) => {
  try {
    const file = await gfsBucket
      .find({ filename: req.params.filename })
      .toArray();
    if (!file.length) return res.status(404).json({ error: "File not found" });

    res.json(file[0]);
  } catch (err) {
   res.status(500).json({status: 500, message: err.message });
  }
};

// 📌 Hiển thị ảnh trực tiếp
const getImage = async (req, res) => {
  try {
    const file = await gfsBucket
      .find({ filename: req.params.filename })
      .toArray();

    if (!file.length) return res.status(404).json({ error: "File not found" });

    if (file[0].contentType.startsWith("image")) {
      const readStream = gfsBucket.openDownloadStreamByName(
        req.params.filename
      );
      return readStream.pipe(res);
    } else {
      res.status(400).json({ error: "Not an image" });
    }
  } catch (err) {
   res.status(500).json({status: 500, message: err.message });
  }
};

// 📌 Xóa file theo ID
const deleteFile = async (req, res) => {
  try {
    await gfsBucket.delete(new ObjectId(req.params.id));
    res.json({ message: "File deleted successfully" });
  } catch (err) {
   res.status(500).json({status: 500, message: err.message });
  }
};


module.exports = {
  uploadFile,
  getAllFiles,
  getFileByName,
  getImage,
  deleteFile,
  uploadMiddleware: upload,
};
