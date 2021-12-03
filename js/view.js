class View {
  createProductElement(product) {
    let prodcutElement = `
      <li class="product">
        <img class="product-img" src="${product.imgSrc}" />
        <div class="product-info">
          <h3 class="title">${product.title}</h3>
          <p>${product.description}</p>
        </div>
      </li>
    `;

    return prodcutElement;
  }

  createErrorElement(errorMessage) {
    let errorElement = `
      <li class="api-error">
        Error: <span class="error-message">${errorMessage} url!</span>
      </li>
    `;

    return errorElement;
  }

  hideElement(elementClassName) {
    let element = document.querySelector(elementClassName);
    let isElementHidden = element.classList.contains("hide");
    if (!isElementHidden) {
      element.classList.add("hide");
    }
  }

  showElement(elementClassName) {
    let element = document.querySelector(elementClassName);
    let isElementHidden = element.classList.contains("hide");
    if (isElementHidden) {
      element.classList.remove("hide");
    }
  }
}

export default View;
