import { RoutingDemoPage } from './app.po';

describe('routing-demo App', () => {
  let page: RoutingDemoPage;

  beforeEach(() => {
    page = new RoutingDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
