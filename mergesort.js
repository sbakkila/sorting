function mergeSort(array){
  if(array.length < 2){
    return array;
  }

  var splitArr = split(array);
  return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
}

function split(array){
  var halfIndex = Math.floor(array.length/2);
  var firstHalf = array.slice(0, halfIndex);
  var secondHalf = array.slice(halfIndex);
  return [firstHalf, secondHalf];
}

function merge(array1, array2){
  var sortedArr= [];

  while(array1.length !== 0 && array2.length !== 0){
    if(array1[0] < array2[0]){
      var shifted = array1.shift();
      sortedArr.push(shifted);
    } else {
      var shifted = array2.shift();
      sortedArr.push(shifted);
    }
  }

  sortedArr = sortedArr.concat(array1).concat(array2);
  return sortedArr;
}
