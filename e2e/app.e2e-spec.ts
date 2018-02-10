import { HotelSearchWebPage } from './app.po';

describe('hotel-search-web App', () => {
  let page: HotelSearchWebPage;

  beforeEach(() => {
    page = new HotelSearchWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
