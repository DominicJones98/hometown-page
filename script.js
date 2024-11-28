var imgUrls;


imgUrls = ['images/carousel-img-1.jpg', 'images/carousel-img-2.webp', 'images/carousel-img-3.avif'];
let element_pic1 = document.getElementById('pic1');
element_pic1.setAttribute("src", imgUrls[0]);
imgUrls.push(imgUrls.shift());


document.getElementById('next').addEventListener('click', (event) => {
  let element_pic12 = document.getElementById('pic1');
  element_pic12.setAttribute("src", imgUrls[0]);
  imgUrls.push(imgUrls.shift());

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_pic13 = document.getElementById('pic1');
  element_pic13.setAttribute("src", imgUrls.slice(-1)[0]);
  imgUrls.unshift(imgUrls.pop());

});