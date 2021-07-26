// const data = require("./utils/projectsData");
const data = require("./utils/pages");

module.exports = {
  trailingSlash: true,
  exportPathMap: async function () {
    // const { projects } = data;
    const { pages } = data;
    const paths = {
      "/": { page: "/" },
    };

    pages.forEach((page) => {
      paths[`/${page.slug}`] = {
        page: page.path ? `${page.locale}}/${page.path}` : `${page.locale}`,
        // page: "/page/[path]",
        query: { path: page.slug },
      };
    });

    // pages.forEach((page) => {
    //   paths.push({
    //     page: page.path ? `/${page.locale}}/${page.path}` : `/${page.locale}`,
    //     query: { path: page.slug },
    //   });
    // });

    return paths;
  },
};
