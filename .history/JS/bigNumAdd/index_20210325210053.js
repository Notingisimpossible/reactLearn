let a = '12313156156132516516';
let b = '51665156165156156156156151';

function bigNumAdd(x, y) {
  let maxLen = Math.max(x.length, y.length);
  maxLen === x.length ? y = y.padStart(maxLen, '0') : x = x.padStart(maxLen, '0');
  let result = [];
  let next = 0;
  for(let i = maxLen-1; i>=0 ; i--) {
    let sum = parseInt(x[i]) + parseInt(y[i]) + next;
    next = Math.floor(sum /10);
    let num = sum%10;
    result.shift(num);
  }
  console.log(result);
  return result.join('');
}
let sum = bigNumAdd(a, b);
console.log(sum);