import { AngularSsrStateTransferPage } from './app.po';

describe('angular-ssr-state-transfer App', function() {
  let page: AngularSsrStateTransferPage;

  beforeEach(() => {
    page = new AngularSsrStateTransferPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
