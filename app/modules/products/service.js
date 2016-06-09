class ProductsService {
  constructor($http) {
    this._$http = $http;
  }

  all() {
    return this._$http
      .get(`https://lcboapi.com/products?access_key=MDo0OGEyYWM2Yy0yZTg2LTExZTYtYjc2Yy1kNzlkYTZiYjA3Y2E6aE9heWFSWVVPN1p3c0p2QWN2dTIzOU9QY3hnU1ZwRnJZVlFz`)
  }

  get(id) {
    return this._$http
      .get(`https://lcboapi.com/products/${id}?access_key=MDo0OGEyYWM2Yy0yZTg2LTExZTYtYjc2Yy1kNzlkYTZiYjA3Y2E6aE9heWFSWVVPN1p3c0p2QWN2dTIzOU9QY3hnU1ZwRnJZVlFz`)
  }

  search(terms) {
    return this._$http
      .get(`https://lcboapi.com/products?q=${terms}&access_key=MDo0OGEyYWM2Yy0yZTg2LTExZTYtYjc2Yy1kNzlkYTZiYjA3Y2E6aE9heWFSWVVPN1p3c0p2QWN2dTIzOU9QY3hnU1ZwRnJZVlFz`)
  }
}

export default ProductsService;
