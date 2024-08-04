Array.prototype.customForEach1 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

/// this is also called as stand alone function
// what is stand alone function :-

function f(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}
