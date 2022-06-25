describe('squareDancer', function() {

  var squareDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    squareDancer = new SquareDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(squareDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a jQuery $node object with class square', function() {
    console.log(squareDancer.$node);
    expect(squareDancer.$node.attr('class')).to.be.equal('square');
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(squareDancer, 'step');
      console.log(squareDancer.step.callCount);
      expect(squareDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      console.log(squareDancer.step.callCount);

      expect(squareDancer.step.callCount).to.be.equal(1);
      console.log(squareDancer.step.callCount);

      clock.tick(timeBetweenSteps);
      expect(squareDancer.step.callCount).to.be.equal(2);
    });
  });
});
