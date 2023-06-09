describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      console.log(blinkyDancer.step.callCount);
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      console.log(blinkyDancer.step.callCount);

      expect(blinkyDancer.step.callCount).to.be.equal(1);
      console.log(blinkyDancer.step.callCount);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
  describe('lineUp', function() {
    it('should have a lineUp function that makes its top 50', function() {
      blinkyDancer.lineUp();
      console.log(blinkyDancer.lineUp);
      expect(blinkyDancer.top).to.be.equal(50);
    });
  });
});
