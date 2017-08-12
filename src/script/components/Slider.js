function Slider(pagination, slide, slidesQuantity) {
  this.control = document.querySelector(pagination);
  this.slide = document.getElementsByClassName(slide);
  this.slidesQuantity = slidesQuantity;

  for (var i = 0; i < this.slide.length; i++) {
    this.slide[i].count = 0;
  }

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

        };

      };

      return slideNumber;

  };

  function moveSlide(side) {

    if (side == undefined) return;

    var item = currentSlide();
    var slideSize = self.slide[item].clientWidth;

    var newStep = function () {

      if (side == 'left' && self.slide[item].count > -self.slidesQuantity) {

        self.slide[item].count--;
        var step = self.slide[item].count * slideSize;

        return step;

      } else if (side == 'right' && self.slide[item].count < 0) {

        self.slide[item].count++;
        var step = self.slide[item].count * slideSize;

        return step;

      }

    };


    self.slide[item].style.backgroundPositionX = newStep() + "px";

    console.log(self.slide[item].count);

  };

  moveSlide(side);

};




export default Slider;
