const data = require("./utils/pages");

module.exports = {
  trailingSlash: true,
  exportPathMap: async function () {
    const { pages } = data;
    const paths = {
      "/": { page: "/" },
    };

    pages.forEach((page) => {
      paths[`/${page.slug}`] = {
        page: "/[path]",
        query: { path: page.slug },
      };
    });

    return paths;
  },
};
