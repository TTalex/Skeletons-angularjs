describe('Protractor Demo App', function() {
  it('should display Hello World', function() {
    browser.get('http://localhost/');
    expect(element(by.tagName("h1")).getText()).toEqual('Hello world');
  });
});
