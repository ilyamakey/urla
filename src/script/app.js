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

var slider = new Slider('.slider__slide__pagination');
console.log(slider);
slider.el.addEventListener("click", function (ev) {
  console.log(ev);
});
