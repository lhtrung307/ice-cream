function createCarousel(topCarousel) {
  const carouselItems = [
    "https://bit.ly/3aq7NBb",
    "https://bit.ly/3aq7NBb",
    "https://bit.ly/3aq7NBb",
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
    image.className = "img-fluid w-100";
    carousel.appendChild(image);
    carouselInner.appendChild(carousel);
  });
  topCarousel.insertBefore(carouselInner, topCarousel.firstChild);
}

function createMultiItemsCarousel(multiItemsCarousel) {
  const carouselItems = [
    [
      [
        {
          image: "https://bit.ly/3aq7NBb",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
      ],
      [
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
      ],
    ],
    [
      [
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
      ],
      [
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
      ],
    ],
    [
      [
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
      ],
      [
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
        {
          image: "https://via.placeholder.com/150",
          name: "Purple Rice Yogurt",
          link: "#",
        },
      ],
    ],
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
        innerCol.className = "col-12 col-md-6 col-lg-3 col-xl-3 my-3 mb-2";
        const imageWrapper = document.createElement("div");
        imageWrapper.className = "image-box mb-2";
        const image = document.createElement("img");
        const link = document.createElement("a");
        imageWrapper.appendChild(link);
        link.href = ele.link;
        image.src = ele.image;
        image.className = "img-fluid w-100";
        link.appendChild(image);
        innerCol.appendChild(imageWrapper);
        row.appendChild(innerCol);
        const title = document.createElement("div");
        title.className = "image-detail";
        const titleLink = document.createElement("a");
        titleLink.href = ele.link;
        titleLink.text = ele.name;
        title.appendChild(titleLink);
        innerCol.appendChild(title);
      });
    });
    container.appendChild(row);
    carousel.appendChild(container);
    if (index === 0) {
      carousel.className = carousel.className + " active";
    }
    carouselInner.appendChild(carousel);
  });
  multiItemsCarousel.insertBefore(carouselInner, multiItemsCarousel.firstChild);
}
