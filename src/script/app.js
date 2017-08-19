var url = 'https://api.github.com/repos/ilyamakey/urla/contents/src/images';

import AjaxRequest from "./components/AjaxRequest";
import Template from "./components/Template";
import Slider from "./components/Slider";
import backgroundImages from "./backgroundImages";

var pictures = new AjaxRequest();

// pictures.load(url, function() {
//
//     return pictures.render(
//
//       '.JS-tablet',
//       new Template('JS-tablet__slide')
//
//     );
//
// });

var sliderLeft = new Slider('.slider__slide--img1', backgroundImages);

sliderLeft.loadSlide(0);

sliderLeft.slide.addEventListener("click", function (evt) {

  return sliderLeft.changeSlide(evt);

});

var sliderMiddle = new Slider('.slider__slide--img2', backgroundImages);

sliderMiddle.loadSlide(1);

sliderMiddle.slide.addEventListener("click", function (evt) {

  return sliderMiddle.changeSlide(evt);

});

var sliderRight = new Slider('.slider__slide--img3', backgroundImages);

sliderRight.loadSlide(2);

sliderRight.slide.addEventListener("click", function (evt) {

  return sliderRight.changeSlide(evt);

});
