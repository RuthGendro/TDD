/* feedreader.js*/
$(function () {

    describe('RSS Feeds', function () {

        // Test to make sure allFoods is defined
        // and contains feeds
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // Test to verify that all feeds have a url
        it('have a URL defined', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });

        // Test to verify that all feeds have a name
        it('have a name defined', function () {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        });
    });



    describe('The menu', function () {
        // Test to verify that the menu is hidden by default
        it('is hidden by default', function () {
            var body = $('body');
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        // Test to verify that the menu changes when clicked
        it('changes visibility when clicked', function () {
            var menuIcon = $('.menu-icon-link');
            var body = $('body');

            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false);

            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
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