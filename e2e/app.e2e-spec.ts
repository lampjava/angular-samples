import { LightSaberPage } from './app.po';

describe('light-saber App', () => {
  let page: LightSaberPage;

  beforeEach(() => {
    page = new LightSaberPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
