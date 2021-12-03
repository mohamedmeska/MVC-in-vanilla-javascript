class Model {
  BASE_URL = "https://jsonplaceholder.typicode.com";
  productsAPI = `${this.BASE_URL}/photos`;
  productsPromise;

  async getProducts() {
    await fetch(this.productsAPI).then((response) => {
      this.productsPromise = response.json();
    });

    return this.productsPromise;
  }
}

export default Model;
