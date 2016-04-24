/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {

    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {

        /*
         * Tests to make sure that the allFeeds variable has been defined
         * and that it is not empty.
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /*
         * Test that loops through each feed in the allFeeds object and ensures
         * it has a URL defined and that the URL is not empty and starts with 'http'.
         */
        it('have URL defined, non-empty, and starting with http', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.trim().length).not.toBe(0);
                expect(feed.url.startsWith('http')).toBe(true);
            });
        });

        /*
         * Test that loops through each feed in the allFeeds object and ensures
         * it has a name defined and that the name is not empty and starts with a capital letter.
         */
        it('have name defined, non-empty, and starting with a capital letter', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.trim().length).not.toBe(0);
                expect(feed.name[0].toUpperCase() === feed.name[0]).toBe(true);
            });
        });
    });


    /* Test suite "The menu" */
    describe('The menu', function () {

        /* Test that ensures the menu element is hidden by default. */
        it('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /*
         * Test that ensures the menu changes visibility when the menu icon is clicked.
         * This test should have two expectations: does the menu display when clicked
         * and does it hide when clicked again.
         */
        it('changes visibility when clicked', function () {
            var $body = $('body');
            var $menuIcon = $('.menu-icon-link');

            $menuIcon.trigger('click');
            expect($body.hasClass('menu-hidden')).toBe(false);

            $menuIcon.trigger('click');
            expect($body.hasClass('menu-hidden')).toBe(true);
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    /* TODO: Write a new test suite named "New Feed Selection"

     /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
}());
