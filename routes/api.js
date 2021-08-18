const express = require("express");
const router = express.Router();

const apiProductsRouter = require("./api/products");

router.use("/productos", apiProductsRouter);

module.exports = router;
