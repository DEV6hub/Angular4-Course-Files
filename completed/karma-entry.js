// Webpack entry point for all tests and required dependencies

Error.stackTraceLimit = Infinity;

// Require test polyfills
require("reflect-metadata");
require("zone.js/dist/zone");
require("zone.js/dist/long-stack-trace-zone");
require("zone.js/dist/async-test");
require("zone.js/dist/fake-async-test");
require("zone.js/dist/sync-test");
require("zone.js/dist/proxy");
require("zone.js/dist/jasmine-patch");
require("rxjs");

var testing = require("@angular/core/testing"),
	browser = require("@angular/platform-browser-dynamic/testing");

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());

// require all modules ending in ".spec.ts" from the
// current directory and all subdirectories
var testsContext = require.context(".", true, /\.spec\.ts$/);
testsContext.keys().forEach(testsContext);
