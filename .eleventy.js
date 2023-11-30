const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(syntaxHighlight);

    // Set directories to pass through to the dist folder
    eleventyConfig.addPassthroughCopy("./src/assets");

    return {
        dir: {
            input: "src",
            output: "dist",
            includes: 'includes',
            layouts: 'layouts',
            data: 'data',
        }
    };
};
