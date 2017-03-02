describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });
  it('sorts a numberic array', function(){
    expect( mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
  it('sorts a alphabet array', function(){
    expect( mergeSort(['C', 'B', 'A'])).toEqual(['A', 'B', 'C']);
  });

});
describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });
});
describe('Merge', function() {
  it('correctly merges two sorted arrays', function() {
    expect( merge([2, 5, 7],[3, 6, 9])).toEqual([2, 3, 5, 6, 7, 9]);
  });
});
