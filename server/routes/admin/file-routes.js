const express = require("express");
const {
    uploadFile,
  getAllFiles,
  getFileByName,
  getImage,
  deleteFile,
  uploadMiddleware,
} = require("../../controllers/admin/file-controller")

const router = express.Router();

// 📌 Routes
router.post("/upload", uploadMiddleware.single("file"), uploadFile);
router.get("/all", getAllFiles);
router.get("/:filename", getFileByName);
router.get("/image/:filename", getImage);
router.delete("/:id", deleteFile);

module.exports = router;
