import { ClitestappPage } from './app.po';

describe('clitestapp App', function() {
  let page: ClitestappPage;

  beforeEach(() => {
    page = new ClitestappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
