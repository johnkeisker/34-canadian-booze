import angular from "angular";

import config from "./config";
import ProductController from "./controllers/product";
import ProductsController from "./controllers/products";
import service from "./service";

let products = angular.module("jk.products", []);

products.config(config);
products.controller("ProductController", ProductController);
products.controller("ProductsController", ProductsController);
products.service("ProductsService", service);

export default products;
