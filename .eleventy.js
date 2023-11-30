const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginTOC = require('eleventy-plugin-toc');
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginTOC)

    // Set directories to pass through to the dist folder
    eleventyConfig.addPassthroughCopy("./src/assets");

    // Customize Markdown library settings:
    eleventyConfig.amendLibrary("md", mdLib => {
        mdLib.use(markdownItAnchor, {
            permalink: markdownItAnchor.permalink.ariaHidden({
                placement: "after",
                class: "header-anchor",
                symbol: "#",
                ariaHidden: false,
            }),
            level: [1,2,3,4],
            slugify: eleventyConfig.getFilter("slugify")
        });
    });

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
