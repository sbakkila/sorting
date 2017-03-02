describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort2([]) ).toEqual( [] );
  });
  it('sorts a numberic array', function(){
    expect( bubbleSort2([3, 2, 1])).toEqual([1, 2, 3]);
  });
  it('sorts a alphabet array', function(){
    expect( bubbleSort2(['C', 'B', 'A'])).toEqual(['A', 'B', 'C']);
  });
});
