
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let ans = [];
  if ((matrix == undefined) || (matrix.length == 0)) return [];
  matrix.map((item, index) => {
    index % 2 === 0 ? item.map(number => {ans.push(number)}) : item.reverse().map(number => {ans.push(number)});    
  })
  return ans;
}
