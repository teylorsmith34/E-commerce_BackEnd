//This index.js will be used to export and define the routes for the app. It will serve as a central hub where I'll import all individual route files and configure them accordingly.

const router = require("express").Router();
const categoryRoutes = require("./api/category-routes");
const productRoutes = require("./api/product-routes");
const tagRoutes = require("./api/tag-routes");

router.use("/api/categories", categoryRoutes);
router.use("/api/products", productRoutes);
router.use("/api/tags", tagRoutes);

module.exports = router;
