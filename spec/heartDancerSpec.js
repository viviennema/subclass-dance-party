describe('heartDancer', function() {

  var heartDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    heartDancer = new HeartDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(heartDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(heartDancer.$node, 'toggleClass');
    heartDancer.step();
    expect(heartDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(heartDancer, 'step');
      console.log(heartDancer.step.callCount);
      expect(heartDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      console.log(heartDancer.step.callCount);

      expect(heartDancer.step.callCount).to.be.equal(1);
      console.log(heartDancer.step.callCount);

      clock.tick(timeBetweenSteps);
      expect(heartDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('lineUp', function() {
    it('should have a lineUp function that makes its top 50', function() {
      heartDancer.lineUp();
      console.log(heartDancer.lineUp);
      expect(heartDancer.top).to.be.equal(50);
    });
  });
});
