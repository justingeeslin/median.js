cost = 0;

describe('Mean', function() {

  beforeAll(function() {

  })

  it('should be correct on Z4', function() {
    var theArray = [0,1,2,3];

    expect(theArray.getMean()).toBe(6/theArray.length)

    // Constant time
    expect(cost).toBe(theArray.length + 1);
  })

})

describe('Median', function() {

  beforeAll(function() {

  })

  it('should be correct on Z4', function() {
    var theArray = [0,1,2,3];

    expect(theArray.getMedian()).toBe(theArray[2])

    // Constant time
    // expect(theArray.cost).toBe(theArray.length + 1);
  })

})

describe('Mode', function() {

  beforeAll(function() {

  })

  it('should be correct for an array of all zeros', function() {
    var theArray = [0,0];

    expect(theArray.getMode()).toBe(0)

    // Constant time
    // expect(theArray.cost).toBe(theArray.length + 1);
  })

  it('should be correct Z4 with additional 3\'s added.', function() {
    var theArray = [0,1,2,3,3,3,3];

    expect(theArray.getMode()).toBe(3)

    // Constant time
    // expect(theArray.cost).toBe(theArray.length + 1);
  })

})
