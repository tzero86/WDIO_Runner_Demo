const assert = require('assert');


describe('User can search a video in YouTube', () => {

    before(() => {
        browser.windowHandleMaximize('current');
    });

    it('Let the user navigate to Youtube home page.', () => {
        browser.url('https://youtube.com');
        assert(browser.isExisting('#search-form #container'));
    });

    it('Should let the user search for a great song and play it!', () => {
        browser.setValue('#search-input #search', 'Morphine All Wrong');
        browser.keys('Enter');
        browser.pause(3000);
        browser.waitForExist('[title="All Wrong - Morphine"]');
        browser.click('[title="All Wrong - Morphine"]');
        browser.pause(9000);
    });
});