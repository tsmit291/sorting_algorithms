function sort(input) {
  for (var i = 0; i < input.length; i++) {
    if(input[i] > input[i+1]){
      input[i] = swapMe;
      input[i]= input[i+1]
      input[i+1] = swapMe
    }
}
return input;
}

function swap() {

}

module.exports = {
  sort: sort,
  swap: swap
}
