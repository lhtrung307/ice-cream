function createCarousel(topCarousel) {
  const carouselItems = [
    "https://bit.ly/3aq7NBb",
    "https://bit.ly/3aq7NBb",
    "https://bit.ly/3aq7NBb"
  ];
  const carouselInner = document.createElement("div");
  carouselInner.className = "carousel-inner";
  carouselItems.forEach((element, index) => {
    const carousel = document.createElement("div");
    carousel.className = "carousel-item";
    if (index === 0) {
      carousel.className = carousel.className + " active";
    }
    const image = document.createElement("img");
    image.src = element;
    image.className = "img-fluid";
    carousel.appendChild(image);
    carouselInner.appendChild(carousel);
  });
  topCarousel.insertBefore(carouselInner, topCarousel.firstChild);
}

function createMultiItemsCarousel(multiItemsCarousel) {
  const carouselItems = [
    [
      [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ],
      [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ]
    ],
    [
      [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ],
      [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ]
    ],
    [
      [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ],
      [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
      ]
    ]
  ];
  const carouselInner = document.createElement("div");
  carouselInner.className = "carousel-inner";
  carouselInner.role = "listbox";
  carouselItems.forEach((carouselItem, index) => {
    const carousel = document.createElement("div");
    carousel.className = "carousel-item";
    const container = document.createElement("div");
    container.className = "container";
    const row = document.createElement("div");
    row.className = "row";

    carouselItem.forEach((element) => {
      element.map((ele) => {
        const innerCol = document.createElement("div");
        innerCol.className = "col-6 col-lg-3 my-3 mb-2";
        const image = document.createElement("img");
        image.src = ele;
        image.className = "img-fluid";
        innerCol.appendChild(image);
        row.appendChild(innerCol);
      });
    });
    container.appendChild(row);
    carousel.appendChild(container);
    if (index === 0) {
      carousel.className = carousel.className + " active";
    }
    carouselInner.appendChild(carousel);
  });
  multiItemsCarousel.appendChild(carouselInner);
}
