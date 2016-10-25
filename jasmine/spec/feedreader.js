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

    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

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
