const express = require("express");
const router = express.Router();
const { v4: uuid } = require("uuid");

let products = [];

// En este punto estamos en la ruta /api/productos/

router.get("/", (req, res) => {
  res.status(200).json(products);
});

router.get("/:id", (req, res) => {
  try {
    let response = products.filter((product) => product.id === req.params.id);

    if (response.length > 0) {
      res.json(response);
    } else throw new Error();
  } catch (error) {
    res.json({ error: "producto no encontrado." });
  }
});

router.post("/", (req, res) => {
  let product = {
    ...req.body,
    id: uuid(),
  };

  product.price = parseFloat(product.price);
  products.push(product);
  res.status(201).redirect("/");
});

router.put("/:id", (req, res) => {
  products = products.map((product) => {
    if (product.id === req.params.id) {
      return {
        ...req.body,
        id: product.id,
      };
    } else {
      return product;
    }
  });

  res.status(200).json(products);
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json(products.filter((product) => product.id !== req.params.id));
});

module.exports = router;
