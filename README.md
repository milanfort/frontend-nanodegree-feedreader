# Feed Reader Testing


## Introduction

This repository contains a solution to assignment #6 of the Udacity's Front-End Web Developer Nanodegree Programme.

The task was to analyze a provided web application that reads RSS feeds, and write tests for its functionality using
[Jasmine](http://jasmine.github.io/) JavaScript testing framework.
Both synchronous and asynchronous application logic, DOM manipulation, and event processing must be tested.
The following tests were required by the specification:

1. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. Write a new test suite named "The menu".
4. Write a test that ensures the menu element is hidden by default. Analyze the HTML and the CSS to determine how the hiding/showing of the menu element works.
5. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
6. Write a new test suite named "Initial Entries".
7. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. This test requires the use of Jasmine's asynchronous testing capabilities.
8. Write a test suite named "New Feed Selection".
9. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. This test also requires the use of Jasmine's asynchronous testing capabilities.


## Live Version

This solution is deployed through GitHub Pages at the following URL:
[http://www.milanfort.com/frontend-nanodegree-feedreader/](http://www.milanfort.com/frontend-nanodegree-feedreader/)

The page contains the Jasmine HTML test output at the bottom.
