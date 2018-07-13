cost = 0;

describe('Mean', function() {

  beforeEach(function() {
    cost = 0;
  })

  it('should be correct on Z4', function() {
    var theArray = [0,1,2,3];

    var sum = theArray.sum();

    // Reset cost so that you only count the calculating of the mean and not the sum.
    cost = 0
    expect(theArray.getMean()).toBe(sum/theArray.length)

    // Linear time on Z4 where numbers constantly accend.
    expect(cost).toEqual(theArray.length + 1);
    console.log('Cost for getting mean (using tree sort)', cost);
  })

})

describe('Median', function() {

  beforeEach(function() {
    cost = 0;
  })

  it('should be correct on Z4', function() {
    var theArray = [0,1,2,3];

    expect(theArray.getMedian()).toBe(theArray[2])

    // Should be linear but not exactly n.
    console.log('Getting median sorted by treesort cost is', cost);
    expect(cost).toBeGreaterThanOrEqual(theArray.length + 1);
  })

})

describe('Mode', function() {

  beforeEach(function() {
    cost = 0;
  })

  it('should be correct for an array of all zeros', function() {
    var theArray = [0,0];

    expect(theArray.getMode()).toBe(0)

    console.log('Getting Mode sorted by treesort cost is', cost);
    expect(cost).toBeGreaterThanOrEqual(theArray.length);
  })

  it('should be correct Z4 with additional 3\'s added.', function() {
    var theArray = [0,1,2,3,3,3,3];

    expect(theArray.getMode()).toBe(3)

  })

})
