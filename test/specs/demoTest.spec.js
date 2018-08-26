const assert = require('assert');


describe('User can search a video in YouTube', () => {

    before(() => {
        browser.windowHandleMaximize('current');
    });

    it('Let the user navigate to Youtube home page.', () => {
        browser.url('https://youtube.com');
        assert(browser.isExisting('#search-form #container'));
    });

    it('Should let the user search for a great song', () => {
        browser.setValue('#search-input #search', 'Morphine All Wrong');
        browser.keys('Enter');
        browser.pause(3000);
        browser.waitForVisible("//div[@id='contents']//ytd-video-renderer[1]//div[1]//div[1]//div[1]//div[1]//h3[1]//a[1]");
        browser.click("//div[@id='contents']//ytd-video-renderer[1]//div[1]//div[1]//div[1]//div[1]//h3[1]//a[1]");
        browser.pause(90000);
    });
});