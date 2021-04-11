module.exports = function eleventyFilters(config) {
    // Dates
    config.addFilter("keys", (obj) => Object.keys(obj));

    // String
    config.addFilter("lowercase", (str) => str.toLowerCase());
    config.addFilter("uppercase", (str) => str.toUpperCase());

    config.addFilter("limit", (str, limit = 200) => {
        if (str.length <= limit) return str;
        return (str = str.substring(0, limit)) + "...";
    });

    /**
     * Usage: <p>{{ post.templateContent | excerpt }}</p>
     */
    config.addFilter("excerpt", (post, limit = 200) => {
        if (!post) return;
        const content = post.replace(/(<([^>]+)>)/gi, "");
        return content.substr(0, content.lastIndexOf(" ", limit)) + "...";
    });

    // collections
    /**
     * Usage:
     * {%- set pickedPosts %}["Title A", "Title B"]{%- endset -%}
     * {% for post in collections.all | pluck(pickedPosts, 'title') %}
     */
    config.addFilter("pluck", function (arr, selections, attr) {
        // Assumes this is receiving a collection, hence the `data`
        // If custom array such as from _data, update accordingly
        return arr.filter((item) => selections.includes(item.data[attr]));
    });

    config.addFilter("sortByOrder", function sortByOrder(values) {
        let vals = [...values];
        return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
    });

    config.addFilter("sortByName", function sortByName(values) {
        let vals = [...values];
        return vals.sort((a, b) => a.data.title.localeCompare(b.data.title));
    });
};
