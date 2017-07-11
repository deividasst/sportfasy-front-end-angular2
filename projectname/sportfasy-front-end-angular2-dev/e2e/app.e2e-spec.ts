import { SportfasyPage } from './app.po';

describe('sportfasy App', () => {
  let page: SportfasyPage;

  beforeEach(() => {
    page = new SportfasyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
