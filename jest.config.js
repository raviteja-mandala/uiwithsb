/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
    testEnvironment: "jsdom",
    coverageDirectory: "coverage",
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/**/*stories.{js,jsx}"],
    setupFiles: ["./src/SetupTests.js"],
    coveragePathIgnorePatterns: [
        "./node_modules/",
        ".story.js",
        "./assetsTransformer.js",
        "./coverage",
        "./src/assets",
        "./src/utils/commandCentermockData.js",
    ],
    testPathIgnorePatterns: [
        "./node_modules/",
        "./coverage",
        "./src/utils/commandCentermockData.js",
    ],
    transform: {
        "^.+\\.js?$": "babel-jest",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "./assetsTransformer.js",
    },
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    },
    verbose: true,
    moduleDirectories: ["node_modules", "src"],
};
