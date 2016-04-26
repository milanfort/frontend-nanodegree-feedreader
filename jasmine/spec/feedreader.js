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

        /* Tests to make sure we have at least 3 entries to work with */
        it('contain at least 3 entries', function () {
            expect(allFeeds.length).toBeGreaterThan(2);
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

        /*
         * Test that loops through each feed in the allFeeds object and ensures
         * it has an id field generated after page load and that it is greater than zero
         * and less than the length of allFeeds array.
         */
        it('have an id field between zero and length generated after page load', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.id).toBeDefined();
                expect(feed.id).toBeGreaterThan(-1);
                expect(feed.id).toBeLessThan(allFeeds.length);
            });
        });
    });


    /* Test suite "The menu" */
    describe('The Menu', function () {

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


    /* Test suite "Initial Entries" */
    describe('Initial Entries', function () {

        /* We have to run the expectations only after loadFeed() completes */
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        /*
         * Test that ensures when the loadFeed function is called and completes its work,
         * there is at least a single .entry element within the .feed container.
         */
        it('are present when loadFeed() completes', function () {
            var $container = $('.feed'),
                $entries = $container.find('.entry');

            expect($entries.length).toBeGreaterThan(0);
        });
    });


    /* Test suite "New Feed Selection" */
    describe('New Feed Selection', function () {
        var $container = $('.feed'),
            oldFirstEntryTitle,
            newFirstEntryTitle;

        /* We have to run the expectations only after loadFeed() completes */
        beforeEach(function (done) {
            loadFeed(0, function () {
                oldFirstEntryTitle = $container.find('.entry > h2:first').text();
                loadFeed(1, function () {
                    newFirstEntryTitle = $container.find('.entry > h2:first').text();
                    done();
                });
            });
        });

        /* Reset to initial entries after tests run */
        afterAll(function (done) {
            loadFeed(0, done);
        });

        /*
         * Test that ensures when a new feed is loaded by the loadFeed function
         * that the content actually changes.
         */
        it('actually changes when loadFeed() completes', function (done) {
            expect(newFirstEntryTitle).not.toBe(oldFirstEntryTitle);
            done();
        });
    });
}());
