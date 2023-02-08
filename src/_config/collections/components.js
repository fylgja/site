const componentsGroup = (collection) => {
    const items = [
        {
            id: "nativeElements",
            title: "Native Elements",
            description:
                "Fylgja Components that require no additional CSS classes to work",
            data: collection.getFilteredByTag("nativeElements"),
        },
        {
            id: "utils",
            title: "CSS Utilities",
            description:
                "Fylgja Utilities that make it easier to apply styles and spacing, using CSS classes directly in your HTML",
            data: collection.getFilteredByTag("utils"),
        },
        {
            id: "tokens",
            title: "CSS Props (Design Tokens)",
            description:
                "Fylgja Props (Design Tokens) that make it easier to apply styles and spacing, using CSS variables",
            data: collection.getFilteredByTag("tokens"),
        },
        {
            id: "layouts",
            title: "Layouts",
            description:
                "Fylgja Components that make it easier to apply layout styles",
            data: collection.getFilteredByTag("layouts"),
        },
        {
            id: "navs",
            title: "Navigation",
            description:
                "Fylgja Components that make it easier to apply navigation styles",
            data: collection.getFilteredByTag("navs"),
        },
        {
            id: "typography",
            title: "Typography",
            description:
                "Fylgja Components that make it easier to apply typography styles",
            data: collection.getFilteredByTag("typography"),
        },
        {
            id: "forms",
            title: "Forms",
            description:
                "Fylgja Components that make it easier to apply form styles",
            data: collection.getFilteredByTag("forms"),
        },
        {
            id: "elements",
            title: "Elements",
            description:
                "Fylgja components that make it easier to apply element specific styles",
            data: collection.getFilteredByTag("elements"),
        },
        {
            id: "addons",
            title: "Add-ons and Helpers",
            description:
                "Fylgja Plugins that improve or add extra functionality to Fylgja and/or other tools",
            data: collection.getFilteredByTag("addons"),
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
