class ProductController {
  constructor($stateParams, ProductsService) {
    this._ProductsService = ProductsService;
    this.id = $stateParams.id;

    this.getProduct();

  }

  getProduct() {
    this._ProductsService.get(this.id)
      .then((response) => {
        this.product = response.data.result;
      });
  }
}

export default ProductController;
