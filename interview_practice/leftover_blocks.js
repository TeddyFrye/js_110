function calculateLeftoverBlocks(blockNum) {
  let blocksRemaining = blockNum;
  let currentLayer = 0;
  let requiredCubes = currentLayer * currentLayer;
  while (blocksRemaining >= requiredCubes) {
    blocksRemaining -= requiredCubes;
    currentLayer += 1;
    requiredCubes = currentLayer * currentLayer;
  }
  return blocksRemaining;
}

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true
