const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const list = document.querySelector(".gallery");


const markup = images
  .map((image) => `
      <li><img src="${image.url}" alt="${image.alt}"></li>`)
  .join("");

list.innerHTML = markup;


// table style



document.querySelectorAll("ul").forEach((unorderList) => {

  unorderList.style.listStyleType = "none";
  unorderList.style.padding = "0";
});

const gallery = document.querySelector(".gallery"); 

  gallery.style.display = "flex";
  gallery.style.flexWrap = "wrap";
  gallery.style.width = "1128px";
  gallery.style.height = "648px";
  gallery.style.margin = "0 auto";
  gallery.style.columnGap = "24px";
  gallery.style.rowGap = "48px";


document.querySelectorAll("li").forEach((listItem) => {
  listItem.style.width = "calc((100% - 2 * 24px) / 3)";
});


document.querySelectorAll("img").forEach((pictur) => {
  
  pictur.style.width = "100%";
  pictur.style.height = "100%";
  pictur.style.objectFit = "cover";
});

