# TDD - Feed Reader App

This project utilizes the Jasmine framework to write tests for a provided feed reader application. The application was provided by Udacity and is fully functional. My job was to write a series of tests provided by Udacity with the Jasmine framework and make sure that all tests were passing.

To view the passing tests, review the live project [here](https://ruthgendro.github.io/TDD/).

### Tests

* Wrote a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
* Wrote a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
* Wrote a new test suite named "The menu".
* Wrote a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
* Wrote a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
* Wrote a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
* Wrote a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
