var HeartDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="heart"></span>');
  this.setPosition(top, left);
};

HeartDancer.prototype = Object.create(Dancer.prototype);
HeartDancer.prototype.constructor = HeartDancer;

HeartDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass("big");
};

HeartDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};