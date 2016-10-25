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

    // Async test to verify there are entries when a feed loads
  describe('Initial Entries', function() {
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });
    it('has at least a single .entry element within the .feed container', function() {
      var entry = $('.feed .entry');
      expect(entry.length).toBeGreaterThan(0);
    });

  // Async test to verify that the content changes when the feed is changed
    describe('New Feed Selection', function() {
      var oldFeedHeader;
      var oldFeedTitle;
      var newFeedHeader;
      var newFeedTitle;

      beforeEach(function(done) {
        loadFeed(0, function() {
          oldFeedHeader = $('.header-title').text();
          oldFeedTitle = $('.feed .entry h2').text();
          loadFeed(1, function() {
            newFeedHeader = $('.header-title').text();
            newFeedTitle = $('.feed .entry h2').text();
            done();
          });
        });
      });
        it('loads new content', function(done) {
          expect(oldFeedHeader === newFeedHeader).toBe(false);
          expect(oldFeedTitle === newFeedTitle).toBe(false);
          done();
      });

    });
  });
}());