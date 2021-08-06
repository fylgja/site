const componentsGroup = (collection) => {
    const items = [
        {
            title: "NativeElements",
            description:
                "Fylgja Components that require no additional CSS classes to work",
            data: collection.getFilteredByTag("nativeElements"),
        },
        {
            title: "Layouts",
            description:
                "Fylgja Components that make it easier to apply layout styles",
            data: collection.getFilteredByTag("layouts"),
        },
        {
            title: "Navigation",
            description:
                "Fylgja Components that make it easier to apply navigation styles",
            data: collection.getFilteredByTag("navs"),
        },
        {
            title: "Typography",
            description:
                "Fylgja Components that make it easier to apply typography styles",
            data: collection.getFilteredByTag("typography"),
        },
        {
            title: "Forms",
            description:
                "Fylgja Components that make it easier to apply form styles",
            data: collection.getFilteredByTag("forms"),
        },
        {
            title: "Elements",
            description:
                "Fylgja components that make it easier to apply element specific styles",
            data: collection.getFilteredByTag("elements"),
        },
        {
            title: "Utilities",
            description:
                "Fylgja Utilities that make it easier to apply styles and spacing",
            data: collection.getFilteredByTag("utils"),
        },
        {
            title: "Plugins",
            description:
                "Fylgja Plugins that improve on the core components or add extra functionally",
            data: collection.getFilteredByTag("plugins"),
        },
    ];

    return items;
};

const componentsFeatured = (collection) => {
    const items = collection
        .getFilteredByGlob("./src/components/**/*.md")
        .filter((post) => post.data.featured)
        .sort((a, b) => {
            return a.data.order - b.data.order;
        });
    return items;
};

const componentsAll = (collection) => {
    const items = collection.getFilteredByGlob("./src/components/**/*.md");
    return items;
};

module.exports = { componentsAll, componentsFeatured, componentsGroup };
