//[[1, 0, 1, 1, 0, 0],
// [0, 0, 1, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// [0, 0, 1, 1, 1, 0],
// [0, 0, 0, 0, 1, 1],
// [0, 0, 1, 1, 1, 1]]

// int setAndCount(int row, int col, int value);

// setAndCount(1, 0, 1) = 3;
// setAndCount(0, 1, 1) = 2;

let islandMap = 
    [[1, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 1],
    [0, 0, 1, 1, 1, 1]]
 
let setAndCount = (row, col, value) => {

  //update the map
  islandMap[row][col] = value;

  //helper funciton for traversing islands
  let walk = (i, j) => {
    //check if still on island
    if (mapCopy[i][j] == 1) {
      //set to 0
      mapCopy[i][j] = 0;
      //call 4 times on neighbors if they are in bounds
      if (i < islandMap.length - 1) {
        walk(i+1, j);    
      }
      if (i > 0) {
        walk(i-1, j);
      }
      if (j < islandMap[0].length - 1) {
        walk(i, j+1);
      }
      if (j > 0) {
        walk(i, j-1);
      }
    }     
  }

  //check for island count

  //make island map copy
  let mapCopy = islandMap.slice();

  //initialize count that will be returned
  let count = 0;

  //start looking through map
  for (let i = 0; i < islandMap.length; i ++) {
    for (let j = 0; j < islandMap[0].length; j ++) {
      let node = islandMap[i][j];
      //check to see if we hit an island
      if ( node == 1 ) {
        //clear island out and increment count
        count ++
        walk (i, j);
      }
    }
  }

  //return count
  return count;
}