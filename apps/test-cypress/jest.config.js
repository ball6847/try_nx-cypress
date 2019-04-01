module.exports = {
  name: "test-cypress",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/test-cypress/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
