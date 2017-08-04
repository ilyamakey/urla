function Slider(pagination, slide, slidesQuantity) {
  this.control = document.querySelector(pagination);
  this.slide = document.getElementsByClassName(slide);
  this.slidesQuantity = slidesQuantity;
};

Slider.prototype.changeSlide = function (evt) {

  var side = evt.target.value;
  var btnName = evt.target.name;

  var self = this;

  var currentSlide = function() {

      var slideNumber;

      for (var i = 0; i < self.slide.length; i++) {

        if (self.slide[i].className == btnName) {

           slideNumber = i;

        }

      };

      return slideNumber;

  };

  function moveSlide(side) {

    var item = currentSlide();
    var slideSize = self.slide[item].clientWidth;

    if (!self.slide[item].style.backgroundPositionX) {

      self.slide[item].style.backgroundPositionX = 0;
      console.log(self.slide[item].style.backgroundPositionX);

    };

    if (side == 'left' && self.slide[item].style.backgroundPositionX > (-(self.slidesQuantity * slideSize) )) {

      self.slide[item].style.backgroundPositionX = self.slide[item].style.backgroundPositionX - slideSize;
      console.log(self.slide[item].style.backgroundPositionX);

    } else if (side == 'right' && self.slide[item].style.backgroundPositionX < (self.slidesQuantity * slideSize)) {

      self.slide[item].style.backgroundPositionX = self.slide[item].style.backgroundPositionX + slideSize;

    };

  };

  moveSlide(side);

};




export default Slider;
