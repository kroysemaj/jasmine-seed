# jasmine-seed

A simple seed TDD project set up with gulp and jasmine. There are no other bells or whistles, just Jasmine and gulp.

##Installation

You'll need nodeJS. From there:

Clone the project and run `npm install` in your terminal

Once the dependencies are downloaded, you're all set. Run `gulp test` to start the test watcher. Each time you save a `*.js` file, the watcher will find and run all tests.

If you want to add new files, add source files to the `javascript` folder and test files to the `spec` folder. Conventionally, your test files should end with `*.spec.js`, though this is not required.