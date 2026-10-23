const fs = require("fs");

module.exports = function(eleventyConfig) {
  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("assets");

  // ASCII hero art (single source of truth: assets/eagle2-ascii-art.txt).
  // Re-read on every build so --serve picks up edits to the txt file.
  eleventyConfig.addGlobalData("asciiHero", () =>
    fs.readFileSync("assets/eagle2-ascii-art.txt", "utf8")
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};