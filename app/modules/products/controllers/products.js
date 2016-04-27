class ProductsController {
  constructor(ProductsService) {
    this._ProductsService = ProductsService;
    this.input = "";

    // this.getProducts();
  }

  getProducts() {
    this._ProductsService.all()
      .then((response) => {
        this.products = response.data.result;
      });
  }

  search() {
    console.log(`searching for ${this.products}`);

    this._ProductsService.search(this.input)
      .then((response) => {
        this.products = response.data.result;
        this.input = "";
      });
  }
}

export default ProductsController;
