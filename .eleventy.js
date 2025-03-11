export default function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('static');
    

    eleventyConfig.addPairedShortcode('comment', (content) => {
        // Simply ignore the content inside the "comment" tag
        return '';
    });

    // Custom filter that concatenates two or more arrays
    eleventyConfig.addFilter("concatIt", function(...arrays) { 
        // Flatten all arrays into a single array
        return arrays.reduce((acc, curr) => acc.concat(curr), []);
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