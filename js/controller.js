import Model from "./model.js";
import View from "./view.js";

class Controller {
  model = new Model();
  view = new View();
  products = [];
  isProductsError = false;
  productErrorMessage = "";

  async render() {
    await this.model
      .getProducts()
      .then((response) => {
        this.view.hideElement(".apis-errors");
        response.slice(0, 8).forEach((item) => {
          this.products.push({
            imgSrc: item.url,
            title: `Product #${item.id}`,
            description: item.title,
          });
        });
      })
      .catch((error) => {
        this.view.hideElement(".products-container");
        this.view.showElement(".apis-errors");
        this.isProductsError = true;
        this.productErrorMessage = error.message;
      });

    this.view.hideElement(".loader");

    if (this.isProductsError) {
      let apisErrorsElement = document.querySelector(".apis-errors");
      apisErrorsElement.insertAdjacentHTML(
        "beforeend",
        this.view.createErrorElement(this.productErrorMessage)
      );
    } else {
      let prodcutsElement = document.querySelector(".products-container");
      this.products.forEach((product) => {
        prodcutsElement.insertAdjacentHTML(
          "beforeend",
          this.view.createProductElement(product)
        );
      });
    }
  }
}

export default Controller;
