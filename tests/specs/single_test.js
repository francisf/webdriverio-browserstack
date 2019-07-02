describe('Google\'s Search Functionality', () => {
  it('can find search results', () => {
      browser.url('https://whatismyipaddress.com/');
      browser.getTitle().should.match(/what/i);
  });
});
