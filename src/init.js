$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    for (var i = 1; i < window.dancers.length; i++) {
      if (window.dancers.length > 1) {
        var firstDancer = window.dancers[0];
        var otherDancer = window.dancers[i];
        var kiss = function(otherDancer) {
          var preTop = otherDancer.top;
          var preLeft = otherDancer.left;
          otherDancer.setPosition (firstDancer.top, firstDancer.left + 20);
          setTimeout(function() {
            otherDancer.setPosition (preTop, preLeft);
          }, 1000);
        };

        kiss(otherDancer);
      }
    }
  });

  $('.lineUpButton').on('click', function(event) {
    var leftPosition = 20;
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer = window.dancers[i];
      dancer.lineUp(leftPosition);
      leftPosition += 100;
    }
  });



});
