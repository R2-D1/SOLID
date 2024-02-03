const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginTOC = require('eleventy-plugin-toc');
const markdownItAnchor = require("markdown-it-anchor");
const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {

    // Define the accordion shortcode
    eleventyConfig.addShortcode("accordion", function(title, content) {
        return `<details>
              <summary>${title}</summary>
              <p>${content}</p>
            </details>`;
    });

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

    // Add responsive image shortcode
    eleventyConfig.addShortcode("responsiveImage", async (src, alt, style) => {
        let metadata = await Image(`./src/assets/images/${src}`, {
            widths: [300, 860],
            formats: ["webp", "jpeg", "jpg"],
            urlPath: "./assets/images/",
            outputDir: "./dist/assets/images/",
        });

        let imageAttributes = {
            alt,
            style,
            sizes: "(min-width: 30em) 50vw, 100vw",
            loading: "lazy",
            decoding: "async",
        };

        return Image.generateHTML(metadata, imageAttributes);
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
