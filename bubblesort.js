function bubbleSort(array){
  var sorted = false;

  if(array.length === 0){
    return [];
  }
  debugger;
  while(!sorted){
    for(var i = 0; i < array.length - 1; i++){
      sorted = true;
      console.log(array[i]);
      if(array[i] > array[i+1]){
        var temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
        sorted = false;

      }
    }
  }
  return array;
}

function bubbleSort2(array){
  do {
    var swap = false;
    for(var i = 0; i < array.length - 1; i++){
      console.log(array[i]);
      if(array[i] > array[i+1]){
        var temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
        swap = true;
      }
    }
  } while (swap === true)
  return array;
}
