var url = 'https://api.github.com/repos/ilyamakey/urla/contents/src/images';

import AjaxRequest from "./components/AjaxRequest";
import Template from "./components/Template";
import Slider from "./components/Slider";

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

var slider = new Slider('.slider__slide__pagination', 'slider__slide', 3);
// console.log(slider.slide);

slider.control.addEventListener("click", function (evt) {

  return slider.changeSlide(evt);
  // console.log(e);

});
