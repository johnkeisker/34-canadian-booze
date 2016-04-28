class ProductsController {
  constructor(ProductsService) {
    this._ProductsService = ProductsService;
    this.terms = "";

    this._ProductsService.all()
      .then((response) => {
        this.products = response.data.result;
      });
  }


  search() {
    console.log(`searching for ${this.terms}`);

    this._ProductsService.search(this.terms)
      .then((response) => {
        this.products = response.data.result;
        this.terms = "";
      });
  }
}

export default ProductsController;
