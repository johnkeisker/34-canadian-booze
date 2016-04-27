class ProductsService {
  constructor($http) {
    this._$http = $http;
  }

  all() {
    return this._$http
      .get(`https://lcboapi.com/products/${id}?access_key=MDo2ZTNjYjZiZS0wYzk2LTExZTYtOTIwNC03MzM5M2RiYzIyMTM6Ykxhc2VUcXZKUGdteWNCUlRjUk5Kb2czd2VtSHA2azVtQkxr`)
  }

  get(id) {
    return this._$http
      .get(`https://lcboapi.com/products/${id}?access_key=MDo2ZTNjYjZiZS0wYzk2LTExZTYtOTIwNC03MzM5M2RiYzIyMTM6Ykxhc2VUcXZKUGdteWNCUlRjUk5Kb2czd2VtSHA2azVtQkxr`)
  }

  search(terms) {
    return this._$http
      .get(`https://lcboapi.com/products?q=${terms}&access_key=MDo2ZTNjYjZiZS0wYzk2LTExZTYtOTIwNC03MzM5M2RiYzIyMTM6Ykxhc2VUcXZKUGdteWNCUlRjUk5Kb2czd2VtSHA2azVtQkxr`)
  }
}

export default ProductsService;
