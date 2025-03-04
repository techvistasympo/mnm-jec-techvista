export default function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('static');
    

    eleventyConfig.addPairedShortcode('comment', (content) => {
        // Simply ignore the content inside the "comment" tag
        return '';
    });

    return {
        dir: {
            input: 'templates',     // Templates folder
            includes: 'includes',    // Includes folder within templates
            output: 'dist',        // Output folder for the generated site
            data: 'data'
        },
        htmlTemplateEngine: 'njk', // Use Nunjucks for HTML files
    };

}