module.exports = function(eleventyConfig) {
    // Add a filter (accessible in Nunjucks templates)
    // eleventyConfig.addFilter("myFilter", function() {});
    //
    // // Add a collection
    // eleventyConfig.addCollection("myCollection", function(collection) {});
    //
    // // Add a transform (this is run after rendering)
    // eleventyConfig.addTransform("myTransform", function() {});
    //
    // // Add a shortcode
    // eleventyConfig.addShortcode("myShortcode", function() {});
    // Custom permalink structure

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
