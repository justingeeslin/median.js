require('array-sorts');

Array.prototype.getMedian = function() {
  var sortedSelf = Object.values(this);
  // What is the cost of this sort? Maybe I should implement my own so that I can measure cost. Without this, it looks like its constant time.
  sortedSelf.sort();

  // Select the middle element
  cost++;
  var i = Math.floor(sortedSelf.length / 2);

  return sortedSelf[i];
}

Array.prototype.getMode = function() {
  var sortedSelf = Object.values(this);
  sortedSelf.sort();

  var modeSoFar;
  var modeOccurancesSoFar = 0;
  var count = 0;
  // Find the longest run of idential elements
  for(var i=1;i < this.length;i++) {
    cost++;
    if (this[i] == this[i-1]) {
      // Identical elements, up the count
      count++;
    }

    if (count > modeOccurancesSoFar) {
      modeSoFar = this[i];
      modeOccurancesSoFar = count;
    }
  }

  // This is the mode.
  return modeSoFar;
}

Array.prototype.sum = function() {
  var sum = 0;
  for(var i=0;i < this.length;i++) {
    cost++;
    sum += this[i];
  }
  return sum;
}

Array.prototype.getMean = function() {
  // Calculate a sum of all the elements...
  var sum = this.sum();

  // then divide by the number of elements
  cost++;
  return sum / this.length;
}
