const router = require("express").Router();
const productModel = require("../models/productModel");
const auth = require('../authentication/auth')

router.get("/", auth.verifyToken, productModel.getAllProducts);

router.post("/", auth.verifyToken, productModel.addProduct);

router.get("/:id", auth.verifyToken, productModel.getProductById);

router.put("/:id", auth.verifyToken, productModel.updateProduct);

router.delete("/:id", auth.verifyToken, productModel.deleteProduct);

module.exports = router;

