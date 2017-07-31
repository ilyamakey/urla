function Slider(className) {
  this.el = document.querySelector(className);
};

Slider.prototype.click = function () {
  console.log('Clikced');
};

export default Slider;
