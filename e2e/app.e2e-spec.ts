import { SrhOnboardingPage } from './app.po';

describe('srh-onboarding App', function() {
  let page: SrhOnboardingPage;

  beforeEach(() => {
    page = new SrhOnboardingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
