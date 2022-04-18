const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/users", (req, res, next) => {
  res.json("users route get");
});

router.put("/users", (req, res, next) => {
  res.json("users route put");
});

router.post("/upload", (req, res, next) => {
  res.json("file upload route");
});

const authRoutes = require('./auth.routes')
router.use("/auth", authRoutes)

module.exports = router;
