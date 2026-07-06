const path = require("path");
const { tests } = require("@iobroker/testing");

// Run integration tests - see https://github.com/ioBroker/testing for a detailed explanation and options
tests.integration(path.join(__dirname, ".."), {
    //            ~~~~~~~~~~~~~~~~~~~~~~~~~
    // This should be the path to the adapter directory

    // Define your own tests inside defineAdditionalTests
    // Since the adapter doesn't have real hardware attached, we just run the default tests
});
