describe('Google\'s Search Functionality', () => {
  it('can find search results', () => {
      browser.url('https://www.whatismyip.com/');
      browser.pause(20000);
      browser.getTitle().should.match(/what/i);
      browser.pause(20000);
  });
});
