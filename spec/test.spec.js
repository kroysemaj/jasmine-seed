describe('Setting up tests with Jasmine', function(){
  it('should be true', function() {
    expect(true).toBe(true);
  });

  it('should see the source file', function() {
    expect(compliment()).toBe('You look nice today');
  });
});
