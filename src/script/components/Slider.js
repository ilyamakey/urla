function Slider(slide, images) {
  this.slide = document.querySelector(slide);
  this.images = images;
  this.styles = getComputedStyle(this.slide);
  this.currentSlide;

};

Slider.prototype.loadSlide = function(slideNumber) {

  var defaultSlide = 0;

  if(slideNumber >= this.images.length) throw new SyntaxError("Can't load more slides than it has");

  this.slide.style.backgroundImage = this.images[slideNumber];
  this.currentSlide = slideNumber;
  // console.log(this.currentSlide);

};

Slider.prototype.changeSlide = function (evt) {

  var side = evt.target.value;

  var self = this;

  function moveSlide(side) {

    if (!side) return;

    if (side == "left" && self.currentSlide > 0) {

      self.currentSlide--;
      self.slide.style.backgroundImage = self.images[self.currentSlide];
      // console.log(self.currentSlide);

    } else if (side == "right" && self.currentSlide < self.images.length - 1) {

      self.currentSlide++;
      self.slide.style.backgroundImage = self.images[self.currentSlide];
      // console.log(self.currentSlide);

    }

  };

  moveSlide(side);

};




export default Slider;
