var SquareDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="square"></span>');
  this.setPosition(top, left);
  this.interaction();
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;

SquareDancer.prototype.step = function() {
  this.top = (this.top + 10) % $("body").height();
  Dancer.prototype.step.call(this);
  this.setPosition(this.top, this.left);
};

SquareDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);

};

SquareDancer.prototype.interaction = function() {
  $('.square').mouseover(function() {
    $('.square').css('border', 'black');
  });
  $('.square').mouseout(function() {
    $('.square').css('border', 'yellow');
  });

};