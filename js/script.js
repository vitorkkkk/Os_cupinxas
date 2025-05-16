const links = document.querySelectorAll('.links-list__item > a');

links.forEach(function (link) {
  link.addEventListener("click", function () {
    links.forEach(function (link) {
      link.classList.remove('active');
    });
    link.classList.add('active');
  });
});

const areas = document.querySelectorAll(".areas-list__item");
const images = document.querySelectorAll(".structure__area-image img");

areas.forEach(function (area, index) {
  area.addEventListener("click", function () {
    areas.forEach(function (area) {
      area.classList.remove("active");
    });
    images.forEach(function (img) {
      img.classList.remove("active");
    });
    area.classList.add("active");
    images[index].classList.add("active");
  });
});

  const banner_images = document.querySelectorAll('.banner__image');
  let banner_image_index = 0;

  setInterval(() => {
    banner_images[banner_image_index].classList.remove('active');
    banner_image_index = (banner_image_index + 1) % banner_images.length;
    banner_images[banner_image_index].classList.add('active');
  }, 3000);
