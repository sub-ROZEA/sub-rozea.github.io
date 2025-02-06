export default async function (eleventyConfig) {
    eleventyConfig
        .addPassthroughCopy({
            "./public/": "/"
        });

    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
}
export const config = {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
        input: "content",          // default: "."
        includes: "../_includes",  // default: "_includes" (`input` relative)
        data: "../_data",          // default: "_data" (`input` relative)
        // output: "_site"
    },
};