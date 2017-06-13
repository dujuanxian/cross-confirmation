import { CrossConfirmationPage } from './app.po';

describe('cross-confirmation App', () => {
  let page: CrossConfirmationPage;

  beforeEach(() => {
    page = new CrossConfirmationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
