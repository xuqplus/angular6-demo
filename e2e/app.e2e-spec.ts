import { XuqplusPage } from './app.po';

describe('xuqplus App', function() {
  let page: XuqplusPage;

  beforeEach(() => {
    page = new XuqplusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
