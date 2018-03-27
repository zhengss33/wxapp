let convertToStarsArr = function(stars) {
  let num = stars.toString().substr(0,1);
  let arr = [];
  for(let i = 1; i <= 5; i++) {
    if (i <= num) {
      arr.push(1);
    } else {
      arr.push(0);
    }
  }
  return arr;
}

module.exports = {
  convertToStarsArr,
};