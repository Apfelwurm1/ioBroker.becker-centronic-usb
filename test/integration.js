const path = require('path');
const { tests } = require('@iobroker/testing');

// Run integration tests
tests.integration(path.join(__dirname, '..'), {
    // Define allowed exit codes if your adapter exits during startup
    allowedExitCodes: [11],
});
