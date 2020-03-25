const express = require("express");
const router = express.Router();

router.post("/images", (req, res, next) => {
  const image = req.files.image;

  image.mv(`./public/images/${image.md5}${image.name}`, err => {
    if (err)
      return res
        .status(500)
        .send({ message: err, error: true, result: [], type: "error" });

    return res.status(200).send({
      message: "File upload",
      error: false,
      result: [],
      type: "success"
    });
  });
});

module.exports = router;
